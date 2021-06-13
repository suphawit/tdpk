import { IInternHubLayoutContents } from '@models';
import { Container } from '@components/common';

interface InternshipDetailsContentProps {
  contents: IInternHubLayoutContents[];
}

const Section02 = ({ contents }: InternshipDetailsContentProps) => {
  const section = (num: number) => contents[num].contents;
  const { detail } = section(0);
  const { detail: locationTitle } = section(1);
  const { detail: locationDetail } = section(2);
  const { detail: howToApplyDetail } = section(3);
  const isNotRender =
    !detail && !locationTitle && !locationDetail && !howToApplyDetail;

  if (isNotRender) return <></>;

  return (
    <section className="bg-gray-100">
      <Container>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-3">
            {detail && (
              <div
                dangerouslySetInnerHTML={{ __html: detail }}
                className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin"
              />
            )}
          </div>
          <div className="col-span-1 lg:col-span-2">
            {(locationTitle || locationDetail) && (
              <div className="p-6 bg-white border mb-5 lg:p-10">
                {locationTitle && (
                  <div className="flex items-start mb-6">
                    <img className="mr-4" src="/ico/tdpk-icons-company.svg" />
                    <div dangerouslySetInnerHTML={{ __html: locationTitle }} />
                  </div>
                )}
                {locationDetail && (
                  <div className="flex items-start">
                    <img className="mr-4" src="/ico/tdpk-icons-point.svg" />
                    <div>
                      <div
                        dangerouslySetInnerHTML={{ __html: locationDetail }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {howToApplyDetail && (
              <div className="p-6 bg-white border lg:p-10">
                <div
                  dangerouslySetInnerHTML={{ __html: howToApplyDetail }}
                  className="ContentContainer"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section02;
