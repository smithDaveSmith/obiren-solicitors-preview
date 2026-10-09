export const firm = {
  name: 'Niall O’Brien & Co. Solicitors',
  phone: '01 621 9450', phoneLink: '+35316219450',
  email: 'info@obriensolicitors.com',
  address: 'Chapel Hill, Lucan, Co. Dublin, K78 H5N0',
  fax: '01 621 9446', dx: '102 004 Lucan',
  original: 'http://obriensolicitors.com/index.html'
};
export const services = [
  {
    id:'conveyancing', file:'conveyancing.html', number:'01', title:'Conveyancing & tax', short:'Conveyancing & property', situation:'Buying, selling or refinancing?',
    summary:'Advice through the legal stages of a property transaction, from contracts to completion.',
    lead:'Buying or selling property brings important legal decisions. Niall O’Brien & Co. can assist with the stages of a purchase or sale, mortgages and other property matters.',
    scopes:[
      ['Purchasing a property','Assistance with deposits, structural engineer instructions, local authority enquiries, investigation of title and contracts.'],
      ['Contracts & completion','Special conditions, searches, lending requirements, completion of the transaction and registration of the dealing.'],
      ['Selling a property','Obtaining title documents, preparing contracts, redeeming a mortgage and completing the sale.'],
      ['Mortgages & other property matters','Mortgages, remortgages, top-up loans, lender security requirements, boundary disputes and the purchase of ground rents.']
    ],
    note:'The practice also lists tax among its areas of expertise. Contact the office to discuss the scope of your tax enquiry.',
    prompt:'Tell us whether you are buying, selling or dealing with another property matter. Mention any relevant dates when you contact the office.', related:['tenantlaw','willsandprobate']
  },
  {
    id:'willsandprobate', file:'willsandprobate.html', number:'02', title:'Wills & probate', short:'Wills & probate', situation:'Planning ahead or managing an estate?',
    summary:'Making a will, estate planning and the administration of an estate.',
    lead:'A will records your intentions for the future. The practice provides advice on making a will, estate planning and the administration of an estate.',
    scopes:[
      ['Making a will','Advice to help ensure your will accurately reflects your intentions.'],
      ['Estate planning','Advice on making provision by will and related probate matters.'],
      ['Administering an estate','Preparing and filing documentation with the Revenue Commissioners and Probate Office.'],
      ['Assets & distribution','Assistance with collecting and distributing estate assets in accordance with a will or intestacy.']
    ],prompt:'Let the office know whether you need to make a will or discuss an estate. The practice can explain what information is needed for your particular matter.', related:['conveyancing','familylaw']
  },
  {
    id:'familylaw', file:'familylaw.html', number:'03', title:'Family law', short:'Family law', situation:'Navigating a family change?',
    summary:'Confidential advice on separation, divorce and matters involving children.',
    lead:'Family matters can be personal and difficult to navigate. Niall O’Brien & Co. provides confidential professional advice on family law matters, including civil partnerships.',
    scopes:[
      ['Separation & divorce','Advice on judicial separation and divorce, based on your individual circumstances.'],
      ['Children & family arrangements','Court applications relating to access, custody and maintenance.'],
      ['Civil partnerships','Advice on family law matters involving civil partnerships.']
    ],prompt:'A brief outline is enough for an initial enquiry. Avoid sending detailed personal documents until the practice advises you how to provide them.', related:['willsandprobate','conveyancing']
  },
  {
    id:'employment', file:'employment.html', number:'04', title:'Employment law', short:'Employment law', situation:'A workplace question or dispute?',
    summary:'Advice for employees and employers on contracts, dismissal, redundancy and workplace rights.',
    lead:'The practice advises employees and employers on employment law, from contracts and entitlements to workplace disputes and representation.',
    scopes:[
      ['Contracts & entitlements','Contracts of employment, holiday entitlements and health and safety matters.'],
      ['Termination & redundancy','Advice on termination, dismissal and redundancy.'],
      ['Equality & discrimination','Advice on equality issues and discrimination in employment.'],
      ['Employment disputes','Representation for employees and employers in employment-related matters.']
    ],prompt:'Mention whether you are an employee or employer, the issue involved and any dates or deadlines already communicated to you.', related:['debtrecovery','personalinjuries']
  },
  {
    id:'personalinjuries', file:'personalinjuries.html', number:'05', title:'Personal injuries', short:'Personal injuries', situation:'Seeking advice after an accident?',
    summary:'Advice on possible entitlement to compensation following an accident or injury.',
    lead:'The practice provides advice on accidents and possible entitlement to compensation. Contact the office to discuss your circumstances and the process of pursuing a claim.',
    scopes:[
      ['Road & workplace accidents','Road traffic accidents, work-related accidents and construction industry claims.'],
      ['Equipment & industrial disease','Defective work equipment and industrial disease claims.'],
      ['Other injury claims','Children’s accidents, psychological injuries and injuries sustained in public.']
    ],note:'Time limits can apply. Contact the practice promptly for advice specific to your circumstances. This page does not assess whether you have a claim.',
    prompt:'Give a brief outline of what happened and when. Do not upload medical records or detailed personal information through this concept website.', related:['employment','familylaw']
  },
  {
    id:'debtrecovery', file:'debtrecovery.html', number:'06', title:'Debt recovery', short:'Debt recovery', situation:'Dealing with an unpaid debt?',
    summary:'Debt recovery, court proceedings and the enforcement of judgments.',
    lead:'Niall O’Brien & Co. provides a debt recovery service, from taking instructions to court proceedings and the enforcement of judgments.',
    scopes:[
      ['Debt recovery instructions','Taking instructions in relation to a debt recovery matter.'],
      ['Court proceedings','Issuing proceedings in the District, Circuit or High Court, as appropriate.'],
      ['Judgment enforcement','Enforcement of judgments and registration of judgment mortgages.']
    ],prompt:'Outline the nature of the debt and whether proceedings or a judgment already exist. The practice can advise what documents are relevant.', related:['employment','tenantlaw']
  },
  {
    id:'tenantlaw', file:'tenantlaw.html', number:'07', title:'Landlord & tenant law', short:'Landlord & tenant law', situation:'A tenancy or lease matter?',
    summary:'Advice on landlord and tenant disputes, and commercial and residential leases.',
    lead:'The practice assists with disputes between landlords and tenants, and with drafting and interpreting commercial and non-commercial leases.',
    scopes:[
      ['Landlord & tenant disputes','Advice on disputes, applications and representation in tenancy and court matters.'],
      ['Commercial leases','Assistance with drafting and interpreting commercial leases.'],
      ['Residential leases','Assistance with drafting and interpreting non-commercial leases.']
    ],prompt:'Explain whether your matter concerns a residential tenancy or commercial lease, and mention any relevant notice or deadline.', related:['conveyancing','debtrecovery']
  }
];
