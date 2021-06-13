import { ITermCondition } from '@models';

export function getTermCondition(): Promise<ITermCondition[]> {
  return new Promise<ITermCondition[]>((resolve) => {
    resolve([
      {
        id: 1,
        title: '1. TERMINOLOGY',
        description: `<ol>
          <li>“Agreement” means, collectively, these Terms & Conditions (the “Terms and Conditions”),
          the attached Membership Details Form cover page(s) (the “Membership Details Form”), and
          any other attachments, exhibits, and/or supplements</li>
          <li>“Authorized Signatory” means an individual authorized to legally bind your company.</li>
          <li>“Commitment Term” means the period of time from the Start Date to the last day of the period set forth on the Membership Details Form under “Commitment Term”</li>
          <li>“Main Premises” means the Premises in which the Working Space is located.</li>
          <li>“Member” or “You” means each person authorized by True Digital Park to receive the
          Services (defined below) (each Member granted a “Membership”).</li>
          <li>“Member Company” means the company or individual entering into this Membership
          Agreement as listed in the Membership Details Form.</li>
          <li>“Working Space” means the physical desk provided to each member as “Workstation”</li>
          <li>“Premises” means a building or portion of a building in which True Digital Park offers offices, workstations, other workspaces, and/or other services to Members.</li>
          <li>“Regular Business Days” are all weekdays, except local public holidays.</li>
          <li>“Regular Business Hours” are generally from 8:00 a.m. to 6:00 p.m. on Regular Business
          Days.</li>
          <li>“Membership Fee” means the fee you will be charged for each individual access to the
          Working Space; you are obligated to pay the Membership Fee for each individual access.</li>
          <li>“Start Date” means the date set forth in the Membership Details Form upon which the
          Services will begin being provided by True Digital Park and the Membership Agreement is
          effective.</li>
          <li>“Privileges” means the member-only services curated and managed by True Digital Park
          and its partners. Details of Privileges are to be notified prior to the agreement signing. True
          Digital Park deserves the right to change the detail of or cancel certain Privileges without
          notifying the member.</li>
          <li>“Workstation” means shared facilities that are provided to each member.</li>
        </ol>`,
      },
      {
        id: 2,
        title: '2. THE BENEFITS OF MEMBERSHIP',
        description: `<ol class='lowerAlpha'>
          <li>
            <span class='font-bold'>Services</span>
            <br/>
            Subject to the terms and conditions of this Agreement and any other policies we make available
            to you with prior notice from time to time, during the Term (defined below), True Digital Park
            will use commercially reasonable efforts to provide you (and your Members, as applicable) the
            services described below. These services are referred to in this Agreement as the “Services.”
            <ol class='lowerRoman'>
              <li>
                Access to the working space consisting of workstations, which are not exclusive to
                any hot desk membership (Co-Working Space), and only the specified desk is
                dedicated to dedicated desk membership from the Start Date for the period of the
                Commitment Term
              </li>
              <li>
                Access to and use of the shared facilities and amenities provided by True Digital
                Park, including restrooms, relaxing areas, living lounges, lockers, and phonebooths
                (Occupancy of shared facilities is based on first-come-first-serve basis)
              </li>
              <li>
                Access to and use of the shared high-speed Internet connection
              </li>
              <li>
                Use of the meeting rooms in the Main Premise during Regular Business Hours, in
                each case subject to availability and credit allowance
              </li>
              <li>
                Air-conditioning in the Working Space during Regular Business Hours
              </li>
              <li>
                Electricity for reasonably acceptable Working Space use
              </li>
              <li>
                Use of pantries, coffee machines and beverages made available therein to our
              members
              </li>
              <li>
                Opportunity to use Privileges curated and managed by True Digital Park
              </li>
              <li>
                Opportunity to participate in members-only events and workshops, and its
              promotion
              </li>
            </ol>
          </li>
          <li>
            <span class='font-bold'>Other Services</span>
            <br/>
            Other services, apart from Services in clause a. may be provided for an additional fee.
          </li>
          <li>
            <span class='font-bold'>Our Reserved Rights.</span>
            <br/>
            We are entitled to access the workstation that the member occupies, with or without notice, in
            connection with our provision of the Services, for safety or emergency purposes or for any
            other purposes. We may temporarily move furnishings contained in the Working Space. We
            reserve the right to alter or relocate certain parts of the Working Space, provided that we will
            not do so in a manner that substantially decreases the square footage of your assigned Working
            Space or related amenities. We may also modify or reduce the list of Services or furnishings
            provided for the Working Space at anytime. The Services may be provided by True Digital
            Park, affiliates or third parties.
          </li>
          <li>
            <span class='font-bold'>Access Prior to Start Date</span>
            <br/>
            If we, in our sole discretion, provide you with access to the Working Space for any period of
            time prior to your Start Date (e.g., Free-Trial Period), during any of such period, you shall be
            fully subject to the terms of this Agreement, regardless of whether we choose to charge you
            the Membership Fee during any of such period. Please be noted that you will be notified in
            advance of at least one week of working days.
          </li>
        </ol>`,
      },
      {
        id: 3,
        title: '3. MEMBERSHIP FEES; PAYMENTS',
        description: `<ol class='lowerAlpha'>
          <li>
            <span class='font-bold'>Payments Due Upon Signing</span>
            <br/>
            Upon submitting your agreement by online submission on our website
            <a href='https://www.truedigitalpark.com/join_membership' target='blank'>https://www.truedigitalpark.com/join_membership</a> 
            or signing submission at True Digital Park and
            completed Agreement, you will be obligated to deliver to us, in the amount(s) set forth on your
            Membership Details Form and the Membership Fee. As for Corporate account purchase, paperbased purchase order shall be processed based on the agreed terms.
          </li>
          <li>
            <span class='font-bold'>Membership Fee</span>
            <br/>
            During the Term (defined below) of this Agreement, your Membership Fee will be due in
            advance according to the payment terms stated in the Membership Details Form. You are
            obligated to make payment of all Membership Fees owed throughout the Commitment Term
            and this obligation is absolute notwithstanding any early termination of the Agreement by you
            (“Membership Fee Obligations”). You agree to pay promptly: (i) all sales, use, excise, value
            added, and any other taxes which you are required to pay to any other governmental authority
            (and, at our request, will provide to us evidence of such payment); (ii) all sales, use, excise,
            value added and any other taxes attributable to your Membership as shown on a payment
            confirmation document (including but not exclusive to invoice, payment page). Additional
            Members will result in additional fees as set forth on the addendum extended from this
            agreement. On each anniversary of the Start Date (including during any Commitment Term)
            the Membership Fee may be subjected to an amount increase at our sole discretion. Following
            any Commitment Term, we reserve the right to further increase or decrease the Membership
            Fee at our sole discretion upon thirty (30) days’ prior notice to you in advance of an in
            accordance with the Termination Notice Period described.
          </li>
          <li>
            <span class='font-bold'>Invoices; Financial Information</span>
            <br/>
            True Digital Park will send or otherwise provide invoices and other billing-related documents,
            information and notices to the Member Individual Name, or, if a Billing Contact is indicated
            on the Membership Details Form, the Billing Contact. Change of the Billing Contact will
            require notice from the Authorized Signatory in accordance with this Agreement.
          </li>
          <li>
            <span class='font-bold'>Credits; Overage Fees</span>
            <br/>
            Each month, you will receive a certain number of credits for meeting room use as specified on
            the Membership Details Form. These allowances shall not be rolled over from month to month.
            If these allocated amounts are exceeded, you will be responsible for paying fees for such
            overages. The overage fee shall be given by True Digital Park. All overage fees are subject to
            increase from time to time at our sole discretion with thirty (30) days’ prior notice.
          </li>
          <li>
            <span class='font-bold'>Late Fees</span>
            <br/>
            If payment for the Membership Fee or any other accrued and outstanding fee is not made by
            the tenth (10th) day following the due date according to the payment terms stated in the
            Membership Details Form, any late payment shall be subjected to interest at the rate of one point
            two five percent (1.25%) per month of the unpaid amounts and calculated on a daily basis until
            the amounts due have been paid in full.
          </li>
          <li>
            <span class='font-bold'>No Refunds</span>
            <br/>
            Except as otherwise provided for herein, there are no refunds of any fees or other amounts paid
            by you in connection with the Services.
          </li>
        </ol>`,
      },
      {
        id: 4,
        title: '4. TERMINATION',
        description: `<ol class='lowerAlpha'>
          <li>
            <span class='font-bold'>Term</span>
            <br/>
            This Agreement will be effective upon your submission of your agreement and completed
            Agreement (whether in a paper-based form or otherwise); provided that we have no obligations
            to provide you with the Services until the later of (i) the date on which payment of first month’s
            Membership Fee has been received by us or (ii) the Start Date. Unless otherwise set forth on
            the Membership Details Form, following the Commitment Term, this Agreement shall
            continue on a month-to-month basis (any term after the Commitment Term, a “Renewal Term”)
            subject to the Termination Notice Periods (defined below). The Commitment Term and all
            subsequent Renewal Terms shall constitute the “Term.” This Agreement will continue until
            terminated in accordance with this Agreement. On the last Regular Business Day of the
            Termination Effective Month (defined below), you must vacate the Working Space by no later
            than 6.00 p.m.
          </li>
          <li>
            <span class='font-bold'>Cancellation Prior to Start Date by the Member</span>
            <br/>
            You may cancel this Agreement prior to the Start Date upon delivery of a written notice to us.
            If your notification of termination is received by TDPK within twenty-four (24) hours of the
            later of (i) submission of your agreement, (ii) completed Agreement and (iii) payment
            transaction completion, you may be entitled to a refund of twenty-five per cent (25%) your
            Membership Fee, less any applicable charges, expenses or deductions. If your notification of
            termination were to be received after 24 hours of the (i) submission of your agreement, (ii)
            completed Agreement and (iii) payment transaction completion, you will not be entitled to a
            refund of your Membership Fee.
          </li>
          <li>
            <span class='font-bold'>Termination by the Member</span>
            <br/>
            You may terminate this Agreement upon delivery of a written notice to us, if your notification
            letter of termination is received by TDPK before seven (7) days of the due date of payment
            according to the commitment terms, you may be entitled to a refund of twenty-five per cent
            (25%) of the remaining Membership Fee
          </li>
          <li>
            <span class='font-bold'>Termination or Suspension by True Digital Park</span>
            <br/>
            We may withhold Services or immediately terminate this Agreement with the advance notice:
            (i) upon breach of this Agreement by you or any Member; (ii) upon termination, expiration or
            material loss of our right in the Premises; (iii) if any outstanding fees are still due after we
            provide notice to you; (iv) if you or any of your Members fail to comply with the terms and
            conditions and any other policies or instructions provided by us or applicable to you; (v) at any
            other time, when we, in our sole discretion; or (vi) if the due amount cannot collected from you
            or any of your Members for any reason. You will remain liable for past due amounts, and we
            may exercise our right to collect due payment or one-month fee, despite termination or
            expiration of this Agreement.
          </li>
          <li>
            <span class='font-bold'>Removal of Property Upon Termination</span>
            <br/>
            Prior to the termination or expiration of this Agreement, you will remove all of your, your
            Members’, and your or their guests’ property from the Working Space, Workstation and Main
            Premises. After providing you with reasonable notice, we will be entitled to dispose of any
            property remaining in or on the Working Space, Workstation and Main Premises after the
            termination or expiration of this Agreement and will not have any obligation to store such
            property, and you waive any claims or demands regarding such property or our handling or
            disposal of such property. You will be responsible for paying any fees reasonably incurred by
            us regarding such removal. We shall have no implied obligations as a bailee or custodian, and
            you hereby indemnify us and agree to keep us indemnified in respect of any claims of any third
            parties in respect of such property. 
          </li>
        </ol>`,
      },
      {
        id: 5,
        title: '5. GENERAL RULES',
        description: `<p class='font-bold'>You acknowledge and agree that</p>
        <ol class='lowerRoman'>
          <li>
            Key cards and other such items used to gain physical access to the Premises, or the
            Working Space remain our property. You and your members shall safeguard our
            property and you shall promptly notify us and be liable for replacement fees should any
            such property be lost, stolen or destroyed.
          </li>
          <li>
            You shall promptly notify us of any change to your contact and/or payment information.
          </li>
          <li>
            We will provide notice to you of any changes to Services, fees, or other updates via
            email. It is your responsibility to read such emails and to ensure you are aware of any
            changes, regardless of whether we notify such Members directly.
          </li>
          <li>
            For security reasons, we may, but have no obligation to, regularly record certain areas
            in the Premises via video surveillance.
          </li>
          <li>
            If you or your Members are at least 18 years of age; you shall be solely and fully
            responsible for ensuring that alcohol is consumed responsibly by your individual
            Members and that no alcohol is consumed by any of your Members or guests who is
            younger than the legal age for consuming alcohol in the applicable jurisdiction;
          </li>
          <li>
            Shared facilities are to be enjoyed by all our member companies and members unless
            otherwise instructed by us for temporary use.
          </li>
          <li>
            You will be responsible for any damage to your Working Space other than normal wear
            and tear.
          </li>
          <li>
            You will be responsible for replacement fees for any item(s) provided to you by the
            True Digital Park community team for temporary use should any such property be lost,
            stolen or destroyed.
          </li>
          <li>
            You may not make any structural or nonstructural alterations or installations (including,
            but not limited to, wall attachments, furniture, IT equipment, and/or glass paneling) in
            the Working Space, Workstation or elsewhere in the Premises without prior approval
            by us. In the event that any alterations or installations are made, you shall be responsible
            for the full cost and expense of the alteration or installation and, prior to the termination
            of this Agreement, the removal of such items and the restoration necessitated by any
            such alterations. In no event are you permitted to perform any of these actions. Only a
            member of our facilities staff is entitled to perform an alteration, installation, removal
            or restoration. Reach out to a member of your community team for more information.
          </li>
          <li>
            You and your Members’ computers, tablets, mobile devices and other electronic
            equipment must be (a) kept up-to-date with the latest software updates provided by
            the software vendor and (b) kept clean of any malware, viruses, spyware, worms,
            Trojans, or anything that is designed to perform malicious, hostile and/or intrusive
            operations. We reserve the right to remove any device from our networks that poses a
            threat to our networks or users until the threat is remediated.
          </li>
          <li>
            Any individual you invite or escort into the Premises must check-in at the front kiosk
            without exception on every occasion of their entry to the Premises.
          </li>
          <li>
            You may bring your guests to the public and/or the shared meeting rooms in our
            facilities that has been booked by TDPK members, excluding any community space not 
            Standard Form TDPK: Template of Membership Agreement LG190400127 Page 7 of 7
            in the public area. TDPK reserves the right to ask your guests to leave our premise if
            an activity that does not fit our policy has been observed.
          </li>
          <li>
            You shall not engage in any activity that compromises the professionalism or quality
            of the Services. You shall not place, or allow anything to be placed in the common
            areas (walkways, restrooms, passageways, doors, elevators, lobby, stairwell, etc.)
            which would cause any impediment to the passage of others, appear unsightly within
            or from outside of the Premises, alter the aesthetic or environment, or would in any
            way cause a disturbance to others either within or outside of the Premises.
          </li>
          <li>
            Anyone or anything which you bring into the Premises that causes a disturbance to
            anyone within the Premises will be required to be removed by you immediately. This
            includes, but is not limited to noise, loud conversation, unruly guests or children, pets,
            odors, or otherwise.
          </li>
          <li>
            You understand that the entire Premises is under 24-hour video surveillance, and
            consent that you and your employees, delegates, agents, guests and other’s entry into
            the Premises is granted with the explicit understanding that they are being filmed and
            that such content may be used by TDPK and shared with others for whatever purpose
            TDPK so chooses.
          </li>
          <li>You shall not use the Premises for lodging or dwelling.</li>
        </ol>`,
      }
    ]);
  });
}