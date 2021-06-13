pipeline {
    agent any

    options { 
        skipDefaultCheckout() 
        disableConcurrentBuilds()
        withAWS(credentials:'morphosis-aws')
    }

    environment { 
        SLACK_CHANNEL = "jenkins-morphosis"
        DEVELOPMENT_BRANCH = "development"
        TEST_BRANCH = "testing"
        STAGING_BRANCH = "staging"
        PRODUCTION_BRANCH = "master"
        FEATURE_BRANCH = "feature/*"
        RELEASE_BRANCH = "release/*"
        PR_BRANCH = "PR-*"

        DEVELOPMENT_IP = "13.251.186.180"        
        DEVELOPMENT_SSH_USER = "ec2-user"
        DEVELOPMENT_WORK_DIR = "/home/ec2-user"
        DEVELOPMENT_SERVER_CREDENTIAL_ID = "tdpk-development-server"

        PREPROD_IP = "52.220.86.249"
        PREPROD_SSH_USER = "ec2-user"
        PREPROD_WORK_DIR = "/home/ec2-user"
        PREPROD_SERVER_CREDENTIAL_ID = "tdpk-preprod-server"

        AWS_CREDENTIALS_ID = "morphosis-ecr"
        AWS_REGION = "ap-southeast-1"
        AWS_ECR_URI = "071424555001.dkr.ecr.ap-southeast-1.amazonaws.com"    

    }

    stages {  
        stage("Initialize") {                  
            steps {
                checkout scm   
                script {                                                                             
                    GIT_COMMIT_MSG = """${sh(
                        returnStdout: true, 
                        script: 'git log -1 --pretty=%B').trim()
                        }"""
                    GIT_LATEST_COMMIT = """${sh(
                        label: 'Get previous commit', 
                        script: 'git rev-parse HEAD',
                        returnStdout: true)?.trim()
                        }"""
                    GIT_PREVIOUS_COMMIT = """${sh(
                        label: 'Get previous commit',
                        script: 'git rev-parse HEAD^', 
                        returnStdout: true)?.trim()
                        }"""
                    GIT_AUTHOR = """${sh(
                        returnStdout: true, 
                        script: "git --no-pager show -s --format='%an' ${GIT_LATEST_COMMIT}").trim()
                        }"""                        
                    def jobName = env.JOB_NAME.tokenize('/') as String[]
                    JOB_BASE_NAME = "${jobName[0]}/${jobName[1]}"
                }
                slackSend color: "warning", 
                    channel: "${SLACK_CHANNEL}",
                    message: "${JOB_BASE_NAME}, build #${env.BUILD_NUMBER} started." 
            }
        }    
        

        
        stage("PR Testing Build") {
            when {   
                anyOf {
                    branch "${PR_BRANCH}"
                }             
            } 
            agent {
                docker { 
                    image "node:12-alpine" 
                    args "-u root:root" /* tell docker to access with root user*/
                }
            }                
            steps {
                checkout scm
                sh "yarn install"
                sh "yarn build"
            }
        }
        stage("Build from development") {      
            when {   
                anyOf {
                    branch "${DEVELOPMENT_BRANCH}"
                }             
            }          
            steps {  
                script {
                    sh "docker-compose -f docker-compose.staging.yml build"   
                }

                slackSend color: "warning", 
                    channel: "${SLACK_CHANNEL}",
                    message: "${JOB_NAME} - ${env.BRANCH_NAME}, build #${env.BUILD_NUMBER} Build." 
            }                                    
        }
        stage("Push to ECR") {      
            when {   
                anyOf {
                    branch "${DEVELOPMENT_BRANCH}"
                }             
            }          
            steps {  
                script {                
                    docker.withRegistry("https://${AWS_ECR_URI}", "ecr:${AWS_REGION}:${AWS_CREDENTIALS_ID}") {
                        sh "docker-compose -f docker-compose.staging.yml push"
                    }
                }

                slackSend color: "warning", 
                    channel: "${SLACK_CHANNEL}",
                    message: "${JOB_NAME} - ${env.BRANCH_NAME}, build #${env.BUILD_NUMBER} Build." 
            }                                    
        }
        stage("Deploy to development server") {           
            when { 
                branch "${DEVELOPMENT_BRANCH}"               
            }           
            steps {                                
                sshagent(credentials : ["${DEVELOPMENT_SERVER_CREDENTIAL_ID}"]) {
                    sh "ssh -o StrictHostKeyChecking=no ${DEVELOPMENT_SSH_USER}@${DEVELOPMENT_IP} uptime"
                    sh "ssh ${DEVELOPMENT_SSH_USER}@${DEVELOPMENT_IP} 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ECR_URI} && \
                    docker-compose -f ${DEVELOPMENT_WORK_DIR}/docker-compose.yml pull && \
                    docker-compose -f ${DEVELOPMENT_WORK_DIR}/docker-compose.yml up -d && \
                    docker image prune -af'"
                }
                slackSend color: "warning", 
                    channel: "${SLACK_CHANNEL}",
                    message: "${JOB_NAME} - ${env.BRANCH_NAME}, build #${env.BUILD_NUMBER} Deploy." 
            }                                    
        }       
        stage('Release for client staging') {
            when {                                 
                tag "*" 
            }
            steps {
                script {
                    docker.withRegistry("https://${AWS_ECR_URI}", "ecr:${AWS_REGION}:${AWS_CREDENTIALS_ID}") {
                        sh "docker-compose -f docker-compose.staging.yml pull"
                        sh "docker-compose -f docker-compose.yml build"                        
                        sh "docker tag tdpk/client:prod tdpk/client:${env.TAG_NAME}"    
                        sh "docker save tdpk/client:${env.TAG_NAME} | gzip > ${env.TAG_NAME}.tar.gz"
                        sh "docker tag tdpk/client:${env.TAG_NAME} 071424555001.dkr.ecr.ap-southeast-1.amazonaws.com/tdpk-client:${env.TAG_NAME}"    
                        sh "docker push 071424555001.dkr.ecr.ap-southeast-1.amazonaws.com/tdpk-client:${env.TAG_NAME}"
                    }

                    sshagent(credentials : ["${PREPROD_SERVER_CREDENTIAL_ID}"]) {
                        sh "ssh -o StrictHostKeyChecking=no ${PREPROD_SSH_USER}@${PREPROD_IP} uptime"
                        sh "ssh ${PREPROD_SSH_USER}@${PREPROD_IP} 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ECR_URI} && \
                        sed -i 's/TDPK_FRONTEND_VERSION=.*/TDPK_FRONTEND_VERSION=${env.TAG_NAME}/g' ${PREPROD_WORK_DIR}/.env && \
                        docker-compose -f ${PREPROD_WORK_DIR}/docker-compose.yml pull && \
                        docker-compose -f ${PREPROD_WORK_DIR}/docker-compose.yml up -d && \
                        docker image prune -af'"
                    } 
                    
                    s3Upload(file:"${env.TAG_NAME}.tar.gz", bucket:'tdpk-docker-image', path:"client/${env.TAG_NAME}.tar.gz", acl:'PublicRead')
                    sh script: "echo https://tdpk-docker-image.s3-ap-southeast-1.amazonaws.com/client/${env.TAG_NAME}.tar.gz", label: "S3 docker image link"
                }
    
                slackSend color: "warning",
                    channel: "${SLACK_CHANNEL}",
                    message: "${JOB_NAME} - ${env.BRANCH_NAME}, build #${env.BUILD_NUMBER} Build."
            }
        }
    }
    
    post {
        cleanup {
            echo "Always clean up workspace"
            cleanWs() /* clean up our workspace again make sure workspace doesn't have any thing left*/
        }
        success {
            script {                                              
                if(env.BRANCH_NAME == "${DEVELOPMENT_BRANCH}" || env.BRANCH_NAME.startsWith("PR-")) {
                    slackSend color: "good", 
                        channel: "${SLACK_CHANNEL}",
                        attachments: [
                            [
                                title: "${JOB_BASE_NAME}, build #${env.BUILD_NUMBER}",
                                title_link: "${RUN_DISPLAY_URL}",
                                color: "good",
                                text: "Success\n${GIT_AUTHOR}",
                                "mrkdwn_in": ["fields"],
                                fields: [
                                    [
                                        title: "Branch",
                                        value: "${env.BRANCH_NAME}",
                                        short: true
                                    ],
                                    [
                                        title: "Change",
                                        value: "<${RUN_CHANGES_DISPLAY_URL}|See change detail>",
                                        short: true
                                    ],
                                    [
                                        title: "Last Commit",
                                        value: "${GIT_COMMIT_MSG} - ${GIT_LATEST_COMMIT}",
                                        short: false
                                    ]
                                ]
                            ]
                        ]                
                }
            }
        }
        unsuccessful {
            script {
                if(env.BRANCH_NAME == "${DEVELOPMENT_BRANCH}" || env.BRANCH_NAME.startsWith("PR-")) {
                    slackSend color: "danger", 
                        channel: "${SLACK_CHANNEL}",
                        attachments: [
                            [
                                title: "${JOB_BASE_NAME}, build #${env.BUILD_NUMBER}",
                                title_link: "${RUN_DISPLAY_URL}",
                                color: "danger",
                                text: "Failure\n${GIT_AUTHOR}",
                                "mrkdwn_in": ["fields"],
                                fields: [
                                    [
                                        title: "Branch",
                                        value: "${env.BRANCH_NAME}",
                                        short: true
                                    ],
                                    [
                                        title: "Change",
                                        value: "<${RUN_CHANGES_DISPLAY_URL}|See change detail>",
                                        short: true
                                    ],
                                    [
                                        title: "Last Commit",
                                        value: "${GIT_COMMIT_MSG} - ${GIT_LATEST_COMMIT}",
                                        short: false
                                    ]
                                ]
                            ]
                        ]
                }
            }
        }
    }
}