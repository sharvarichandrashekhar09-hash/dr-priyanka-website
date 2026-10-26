export const serviceCategories = [
  {
    title: 'Pregnancy & maternity',
    services: [
      { slug: 'pregnancy-care', title: 'Pregnancy Care', description: 'Pregnancy consultations and follow-up discussed around individual needs.' },
      { slug: 'normal-cesarean-delivery', title: 'Normal & Cesarean Delivery', description: 'Discuss delivery planning and the options relevant to your circumstances.' },
      { slug: 'antenatal-care', title: 'Antenatal Care', description: 'Care conversations and follow-up during pregnancy.' },
      { slug: 'postnatal-care', title: 'Postnatal Care', description: 'Support and follow-up after childbirth.' },
      { slug: 'high-risk-pregnancy', title: 'High-Risk Pregnancy Care', description: 'Individual obstetric consultations for pregnancies needing closer discussion.' },
      { slug: 'nst', title: 'NST / Fetal Monitoring', description: 'Ask the clinic about monitoring and whether it is appropriate for you.' },
    ],
  },
  {
    title: 'Gynaecology',
    services: [
      { slug: 'pcos-pcod', title: 'PCOS / PCOD Management', description: 'Discuss PCOS / PCOD concerns and possible care options with your doctor.' },
      { slug: 'menstrual-health', title: 'Menstrual Problems', description: 'Consultations for questions about menstrual health and changes.' },
      { slug: 'gynaecological-care', title: 'General Gynaecological Care', description: 'A consultation for women’s health concerns and questions.' },
      { slug: 'laparoscopic-gynaecology', title: 'Laparoscopic Gynaecological Surgery', description: 'Discuss whether laparoscopic approaches are relevant to your care.' },
      { slug: 'hysterectomy-guidance', title: 'Hysterectomy Guidance', description: 'A conversation to understand questions around hysterectomy and care options.' },
    ],
  },
  {
    title: 'Fertility & family planning',
    services: [
      { slug: 'fertility', title: 'Fertility Guidance', description: 'Discuss fertility concerns and possible next steps with your doctor.' },
      { slug: 'preconception-counselling', title: 'Preconception Counselling', description: 'A personalised conversation when planning for pregnancy.' },
      { slug: 'family-planning', title: 'Family Planning Services', description: 'Explore family planning questions in a confidential consultation.' },
      { slug: 'contraceptive-counselling', title: 'Contraceptive Counselling', description: 'Discuss contraceptive options with a qualified healthcare professional.' },
      { slug: 'tubal-ligation-guidance', title: 'Tubal Ligation Guidance', description: 'Ask questions about tubal ligation and related care.' },
    ],
  },
  {
    title: "Preventive women's health",
    services: [
      { slug: 'hpv-vaccination', title: 'HPV Vaccination', description: 'Discuss HPV vaccination and whether it is appropriate for you.' },
      { slug: 'pap-smear', title: 'Pap Smear', description: 'Ask about the Pap smear procedure and whether it is recommended for you.' },
      { slug: 'hpv-dna-testing', title: 'HPV DNA Testing', description: 'Discuss HPV DNA testing with your healthcare professional.' },
      { slug: 'cancer-screening', title: 'Cancer Screening & Treatment Guidance', description: 'Discuss screening questions and referral or treatment guidance.' },
      { slug: 'post-menopausal-health', title: 'Post-Menopausal Health', description: 'Consultations about health and wellbeing after menopause.' },
    ],
  },
  {
    title: 'Other women’s healthcare',
    services: [
      { slug: 'mtp-abortion', title: 'MTP / Abortion Guidance', description: 'Discuss your questions privately with a qualified healthcare professional.' },
      { slug: 'womens-wellness', title: 'Women’s Wellness', description: 'General women’s health and wellness consultations.' },
    ],
  },
]

export const services = serviceCategories.flatMap((category) => category.services)
  .filter((service, index, list) => list.findIndex((item) => item.slug === service.slug) === index)

export const serviceDetails = {
  'pregnancy-care': {
    intro: 'Pregnancy care at Matruja includes a space to discuss your health, questions and care needs during pregnancy.',
    overview: 'Pregnancy care is planned around each person’s circumstances. Your clinician can talk through relevant consultations, follow-up and questions during your visit.',
    concerns: ['Pregnancy consultations and follow-up', 'Questions about antenatal care', 'Planning discussions around delivery', 'Postnatal care questions'],
  },
  'normal-cesarean-delivery': {
    intro: 'Discuss delivery planning and the options that may be relevant to your pregnancy with your obstetrician.',
    overview: 'The appropriate plan depends on individual clinical circumstances. A consultation is a chance to ask questions and understand the options available to you.',
    concerns: ['Questions about birth planning', 'Understanding delivery options', 'Discussing individual care needs'],
  },
  'antenatal-care': {
    intro: 'Antenatal care offers an opportunity to discuss your pregnancy and care plan with your clinician.',
    overview: 'Your doctor can discuss what is relevant at your stage of pregnancy and how to plan your follow-up.',
    concerns: ['Routine pregnancy consultations', 'Questions about your pregnancy', 'Planning follow-up visits'],
  },
  'postnatal-care': {
    intro: 'Postnatal care is a time to discuss your wellbeing and questions after childbirth.',
    overview: 'The needs after childbirth vary. Your clinician can discuss concerns and relevant follow-up based on your individual circumstances.',
    concerns: ['Post-birth follow-up', 'Questions about recovery and wellbeing', 'Discussing ongoing care needs'],
  },
  'high-risk-pregnancy': {
    intro: 'If your pregnancy needs additional consideration, a consultation can help you discuss individual care and follow-up.',
    overview: 'Care decisions are personal and should be discussed with your obstetrician, who can consider your history and current needs.',
    concerns: ['Discussing your pregnancy history', 'Questions about closer follow-up', 'Understanding an individual care plan'],
  },
  nst: {
    intro: 'Contact the clinic to ask about NST / fetal monitoring and whether it may be relevant to your care.',
    overview: 'A clinician can explain the purpose of a monitoring test, when it may be considered, and what its results mean in your specific situation.',
    concerns: ['Understanding why monitoring is suggested', 'Questions about preparation', 'Discussing results with your clinician'],
  },
  'pcos-pcod': {
    intro: 'A consultation gives you time to discuss PCOS / PCOD concerns and questions about your health.',
    overview: 'PCOS / PCOD concerns and care needs vary between individuals. Your clinician can discuss your health history and the questions that matter to you.',
    concerns: ['Questions about PCOS / PCOD', 'Changes in menstrual patterns', 'Discussing individual health and lifestyle questions'],
  },
  'menstrual-health': {
    intro: 'Matruja offers consultations for questions and concerns about menstrual health.',
    overview: 'Menstrual experiences differ. A clinician can listen to your concerns, discuss relevant history and talk through possible next steps.',
    concerns: ['Irregular periods', 'Painful periods', 'Heavy bleeding', 'Changes or questions about your cycle'],
  },
  'laparoscopic-gynaecology': {
    intro: 'If you have questions about laparoscopic gynaecological surgery, discuss them with your clinician.',
    overview: 'Your doctor can explain whether a procedure or approach may be relevant, along with individual considerations and available alternatives.',
    concerns: ['Understanding a proposed procedure', 'Discussing potential options', 'Questions about preparation and follow-up'],
  },
  'gynaecological-care': {
    intro: 'A general gynaecological consultation is a place to talk through questions about your health.',
    overview: 'Your clinician can listen to your concerns, discuss relevant health history and help you understand possible next steps.',
    concerns: ['Routine gynaecological care', 'Questions about reproductive health', 'Women’s wellness discussions'],
  },
  'hysterectomy-guidance': {
    intro: 'If you have questions about hysterectomy, discuss them with a qualified healthcare professional.',
    overview: 'A clinician can talk through why a procedure may be considered, individual factors, alternatives and follow-up questions.',
    concerns: ['Understanding a recommendation', 'Discussing possible alternatives', 'Questions about preparation and recovery'],
  },
  'womens-wellness': {
    intro: 'A women’s wellness consultation offers space to discuss your health questions and care needs.',
    overview: 'Wellness needs differ from person to person. Your clinician can help you discuss appropriate routine or preventive care.',
    concerns: ['General women’s health', 'Routine gynaecological care', 'Questions about preventive health'],
  },
  fertility: {
    intro: 'Fertility guidance provides an opportunity to discuss your questions and plans in a confidential setting.',
    overview: 'Fertility care is individual. A clinician can talk through your concerns and the information needed to consider appropriate next steps.',
    concerns: ['Fertility-related questions', 'Preconception counselling', 'Reproductive health discussions'],
  },
  'preconception-counselling': {
    intro: 'Preconception counselling is an opportunity to discuss questions when planning for pregnancy.',
    overview: 'A clinician can review relevant health history and discuss questions or next steps based on individual circumstances.',
    concerns: ['Questions when planning a pregnancy', 'Relevant health history', 'Discussing possible next steps'],
  },
  'family-planning': {
    intro: 'Family planning consultations offer a private space to discuss your preferences and questions.',
    overview: 'A qualified clinician can help you understand relevant options and discuss what may suit your individual needs.',
    concerns: ['Contraceptive counselling', 'Family planning questions', 'Tubal ligation guidance'],
  },
  'contraceptive-counselling': {
    intro: 'Discuss contraceptive questions and options with a qualified healthcare professional.',
    overview: 'A clinician can help explain available options and discuss considerations relevant to your individual needs.',
    concerns: ['Questions about contraception', 'Understanding available options', 'Discussing personal considerations'],
  },
  'tubal-ligation-guidance': {
    intro: 'A consultation can help you discuss questions about tubal ligation and related care.',
    overview: 'A qualified healthcare professional can explain relevant considerations, alternatives and follow-up based on your circumstances.',
    concerns: ['Understanding the procedure', 'Discussing alternatives', 'Questions about preparation and follow-up'],
  },
  'hpv-vaccination': {
    intro: 'Contact the clinic to discuss HPV vaccination and any questions you may have.',
    overview: 'A healthcare professional can discuss vaccination in the context of your age, history and individual needs.',
    concerns: ['Questions about HPV vaccination', 'Discussing suitability with a clinician', 'Understanding next steps'],
  },
  'cancer-screening': {
    intro: 'Discuss screening questions and relevant guidance with a qualified healthcare professional.',
    overview: 'Screening and follow-up depend on individual factors. Your clinician can discuss which options or referrals may be appropriate for you.',
    concerns: ['Questions about screening', 'Discussing personal health history', 'Understanding possible follow-up'],
  },
  'hpv-dna-testing': {
    intro: 'Discuss HPV DNA testing and any questions you may have with your healthcare professional.',
    overview: 'A clinician can explain the purpose of testing and discuss whether it is appropriate for you based on your individual circumstances.',
    concerns: ['Questions about HPV DNA testing', 'Discussing personal health history', 'Understanding possible follow-up'],
  },
  'pap-smear': {
    intro: 'A consultation can help answer questions about Pap smear screening and whether it is appropriate for you.',
    overview: 'A clinician can explain the procedure, discuss screening in the context of your health history and answer your questions.',
    concerns: ['Questions about the procedure', 'Discussing whether screening is suitable', 'Understanding how to follow up'],
  },
  'mtp-abortion': {
    intro: 'For questions about MTP or abortion care, contact a qualified healthcare professional for confidential, lawful guidance.',
    overview: 'Care and options depend on individual circumstances and applicable law. A clinician can discuss your situation privately and explain appropriate next steps.',
    concerns: ['Confidentially discussing your questions', 'Understanding lawful care options', 'Discussing appropriate clinical follow-up'],
  },
  'post-menopausal-health': {
    intro: 'Matruja provides consultations to discuss women’s health questions after menopause.',
    overview: 'Health and wellbeing after menopause are individual. A clinician can discuss your questions, history and possible care options.',
    concerns: ['Post-menopausal health questions', 'Discussing changes and wellbeing', 'Routine gynaecological care'],
  },
}

export const serviceVisitGuides = {
  'pregnancy-care': 'Your clinician can discuss your pregnancy stage, relevant health history and questions about ongoing care. Together, you can review what follow-up may be appropriate and when to get in touch with the clinic.',
  'normal-cesarean-delivery': 'Birth planning is based on your health, pregnancy and preferences. Your obstetrician can explain the considerations around vaginal birth and caesarean birth, answer questions and discuss how the plan may change if circumstances change.',
  'antenatal-care': 'Antenatal visits are an opportunity to talk about how you are feeling, review relevant pregnancy information and ask questions as your pregnancy progresses. Your clinician can advise which checks and follow-up are appropriate for you.',
  'postnatal-care': 'A postnatal discussion can cover recovery, emotional wellbeing, feeding questions and any concerns after birth. Your clinician can help decide whether an examination, further support or follow-up is appropriate.',
  'high-risk-pregnancy': 'Your clinician can review your medical and pregnancy history, discuss factors that may need closer attention and explain an individual follow-up plan. Any monitoring or referrals will depend on your circumstances and clinical assessment.',
  nst: 'If monitoring is being considered, your clinician can explain why it may be useful, what the appointment involves and how results are interpreted alongside your overall pregnancy. Ask the clinic about availability and whether a referral or prior appointment is needed.',
  'pcos-pcod': 'A discussion may include cycle patterns, symptoms, health history and any goals or concerns you want to prioritise. Your clinician can explain whether further assessment is useful and discuss care options in the context of your individual needs.',
  'menstrual-health': 'It can help to talk through when changes began, how often they occur and how they affect daily life. Your clinician may review your history and discuss whether an examination or further assessment is appropriate before suggesting next steps.',
  'gynaecological-care': 'Use the visit to raise any reproductive or gynaecological health questions, including symptoms you may feel uncomfortable discussing elsewhere. Your clinician can help prioritise concerns and explain appropriate assessment or follow-up.',
  'laparoscopic-gynaecology': 'If surgery has been suggested, ask why it is being considered, what alternatives may be available and what recovery and follow-up could involve. The suitability of a laparoscopic approach depends on the procedure and your individual clinical circumstances.',
  'hysterectomy-guidance': 'A consultation can help clarify the reason hysterectomy is being considered, what alternatives may exist and what the procedure and recovery could involve. Decisions are individual; ask your clinician to explain benefits, risks and follow-up relevant to you.',
  fertility: 'You can discuss how long you have been trying to conceive, relevant health history and any previous investigations or treatment. Your clinician can explain possible next steps for you and your partner, if applicable, based on your circumstances.',
  'preconception-counselling': 'When planning a pregnancy, discuss your health history, current medicines, previous pregnancies and any questions or concerns. Your clinician can help identify topics to address before pregnancy and advise whether any additional review is appropriate.',
  'family-planning': 'Talk through your preferences, timing and questions about planning or spacing a pregnancy. Your clinician can explain relevant options and help you consider which approaches may fit your health and personal circumstances.',
  'contraceptive-counselling': 'A conversation can cover your preferences, health history and questions about available contraceptive methods. Your clinician can explain how options differ and discuss suitability, possible side effects and what to do if your needs change.',
  'tubal-ligation-guidance': 'Ask about the procedure, its intended permanence, alternatives and what preparation and recovery may involve. Your clinician can discuss whether it is appropriate for you and make sure your questions are addressed before any decision.',
  'hpv-vaccination': 'Your clinician can discuss HPV vaccination in relation to your age, vaccination history and individual circumstances. Ask about the recommended schedule for you, what to expect and whether you need to bring any vaccination records.',
  'pap-smear': 'Your clinician can explain what a Pap smear checks for, whether screening is appropriate for you and how results are communicated. You can ask about preparation, timing and what follow-up may be needed based on the result.',
  'hpv-dna-testing': 'Ask what an HPV DNA test looks for, why it may be recommended and how its result may guide follow-up. Your clinician can explain how testing fits your history and whether any other assessment is appropriate.',
  'cancer-screening': 'Screening and follow-up depend on the type of concern, your history and relevant risk factors. Your clinician can explain which screening or assessment may be suitable, how results are followed up and whether referral is appropriate.',
  'post-menopausal-health': 'You can discuss changes or concerns after menopause, including their effect on comfort and daily wellbeing. Your clinician can review your history and explain whether assessment, preventive care or treatment options should be considered.',
  'mtp-abortion': 'A qualified clinician can discuss your situation privately, explain lawful options and clarify what clinical assessment and follow-up may be needed. Care depends on individual circumstances and applicable requirements; contact the clinic directly to discuss your questions.',
  'womens-wellness': 'A wellness visit can be shaped around the questions that matter to you, from routine gynaecological care to preventive health. Your clinician can help identify priorities and suggest an appropriate plan based on your history and needs.',
}

export const educationArticles = [
  {
    slug: 'pcos',
    title: 'Understanding PCOS / PCOD',
    intro: 'PCOS can affect periods, skin, hair growth and fertility in different ways. Learn how clinicians assess it and what may be useful to discuss at a visit.',
    readingTime: '4 min read',
    metaDescription: 'Patient-friendly information about PCOS / PCOD symptoms, assessment, health considerations and when to seek care.',
    keyTakeaways: [
      'PCOS can affect periods, skin, hair growth and fertility, but experiences differ from person to person.',
      'Symptoms alone do not confirm PCOS; assessment considers other possible causes.',
      'Support can address symptoms, general health and fertility goals based on individual needs.',
    ],
    sections: [
      {
        heading: 'What is PCOS?',
        blocks: [
          { text: 'Polycystic ovary syndrome (PCOS), also called PCOD in some settings, is a common hormonal condition. It may be associated with irregular or absent periods, acne, increased facial or body hair, thinning scalp hair, or difficulty becoming pregnant. Not everyone experiences the same symptoms.' },
          { text: 'Despite the name, ovarian cysts are not required for a diagnosis. The word “polycystic” can be confusing: the appearance described on an ultrasound refers to small follicles, not necessarily harmful cysts.' },
        ],
      },
      {
        heading: 'How is PCOS assessed?',
        blocks: [
          { text: 'A clinician considers symptoms, menstrual and medical history, and may recommend examination, blood tests or imaging when appropriate. International guidance describes diagnosis in adults as requiring at least two of three features—signs of higher androgen levels, irregular or absent ovulation, or a polycystic appearance of the ovaries—after other causes have been considered. Assessment differs for adolescents and should be guided by a qualified clinician.' },
          { type: 'callout', title: 'Avoid self-diagnosis', tone: 'helpful', text: 'Acne, irregular periods or an ultrasound finding alone cannot establish PCOS. A clinician can discuss what evaluation is appropriate for your age and symptoms.' },
        ],
      },
      {
        heading: 'Care and health conversations',
        blocks: [
          { text: 'There is no single approach that suits everyone. A care plan may consider the concerns that matter to you, such as cycle changes, skin or hair symptoms, future pregnancy plans, and general health. PCOS is associated with increased risk of some metabolic and cardiovascular conditions; a clinician can advise whether and when checks are relevant for you.' },
          { text: 'If you have persistent menstrual changes, symptoms that concern you, or questions about fertility or emotional wellbeing, consider arranging a consultation. Bring a list of symptoms, cycle dates, medicines and questions if helpful.' },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to seek medical advice',
      blocks: [
        { text: 'Speak with a healthcare professional about persistent irregular or absent periods, unwanted hair growth, acne that concerns you, difficulty becoming pregnant, or the emotional impact of symptoms. Seek urgent care for severe or sudden symptoms rather than waiting for a routine appointment.' },
      ],
    },
    urgentNote: null,
    faqs: [
      { question: 'Does PCOS always cause ovarian cysts?', answer: 'No. Ovarian cysts are not required to diagnose PCOS. The condition name can be misleading, so an ultrasound finding should be interpreted by a clinician in context.' },
      { question: 'Can PCOS be diagnosed from symptoms alone?', answer: 'Symptoms help guide an assessment, but a clinician may need to consider other causes and decide whether tests or imaging are appropriate.' },
      { question: 'Can someone with PCOS become pregnant?', answer: 'Many people with PCOS do become pregnant. If you have questions about fertility or pregnancy planning, discuss your individual situation with a qualified clinician.' },
    ],
    references: [
      { label: 'WHO: Polycystic ovary syndrome', url: 'https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome' },
      { label: 'NHS: Polycystic ovary syndrome (PMOS)', url: 'https://www.nhs.uk/conditions/polyendocrine-metabolic-ovarian-syndrome-pmos/' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Discuss your PCOS questions with a clinician.',
    related: ['menstrual-health', 'preconception-care', 'preventive-health'],
  },
  {
    slug: 'healthy-pregnancy',
    title: 'Healthy Pregnancy and Antenatal Care',
    intro: 'Antenatal care provides time to discuss your health and pregnancy with a maternity professional. Learn how to prepare for appointments and recognize symptoms that need prompt attention.',
    readingTime: '5 min read',
    metaDescription: 'Learn about starting antenatal care, preparing for pregnancy appointments and recognizing urgent warning signs.',
    keyTakeaways: [
      'Contact a maternity-care professional early after learning you are pregnant.',
      'The schedule and content of antenatal visits vary by location and individual health needs.',
      'Severe or concerning symptoms during pregnancy or after birth need prompt medical attention.',
    ],
    sections: [
      {
        heading: 'Starting antenatal care',
        blocks: [
          { text: 'Antenatal care offers a chance to discuss your health, pregnancy, questions and support needs with a maternity-care professional. If you think you may be pregnant, contact a clinician or local maternity service early to ask about the next steps.' },
          { text: 'Visits may include checks and conversations about your wellbeing and the pregnancy. The timing, tests and follow-up plan depend on local guidance, your health history and how the pregnancy is progressing.' },
        ],
      },
      {
        heading: 'Preparing for appointments',
        blocks: [
          { type: 'list', title: 'It may help to bring or note:', items: ['The first day of your last menstrual period, if known, and any symptoms or concerns.', 'Current medicines, supplements, allergies and relevant medical history.', 'Previous pregnancy records or test reports you would like to discuss.', 'Questions about tests, medicines, activity, emotional wellbeing or your care plan.'] },
          { text: 'Ask your clinician to explain anything that is unclear. You can discuss preferences, worries and practical support needs throughout your care.' },
        ],
      },
      {
        heading: 'Pregnancy care is individual',
        blocks: [
          { text: 'Some pregnancies need additional appointments or specialist input because of a health condition, previous pregnancy history or a concern that arises during pregnancy. Your maternity-care team can explain why a recommendation is being made and what choices are available.' },
          { text: 'This article gives general information, not a personal pregnancy plan. Follow the advice of your maternity-care team, who can consider your medical history and local services.' },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to contact your maternity-care team',
      blocks: [
        { text: 'Contact your maternity-care professional promptly about symptoms that worry you, including severe headache or vision changes, trouble breathing, chest pain, severe abdominal pain, fainting, heavy vaginal bleeding or fluid leaking, or a noticeable reduction in your baby’s movement. If symptoms are severe or immediately dangerous, seek emergency care.' },
      ],
    },
    urgentNote: { title: 'Urgent pregnancy warning signs', text: 'Severe headache or vision changes, difficulty breathing, chest pain, severe abdominal pain, fainting, heavy bleeding or fluid leaking, reduced fetal movement, or thoughts of harming yourself or your baby need prompt attention. Use local emergency services for severe or immediately dangerous symptoms.' },
    faqs: [
      { question: 'When should I arrange my first pregnancy appointment?', answer: 'Contact a maternity-care professional as soon as you know or suspect you are pregnant. They can advise on timing and the right local service for you.' },
      { question: 'Will everyone have the same antenatal visit schedule?', answer: 'No. Appointment schedules and tests vary by country, local service and individual health needs. Your maternity-care team can explain the plan for you.' },
      { question: 'Is an online consultation enough for pregnancy symptoms?', answer: 'An online visit may be suitable for some conversations, but it cannot replace urgent in-person assessment when symptoms need immediate examination or treatment. Follow your maternity-care team’s advice.' },
    ],
    references: [
      { label: 'WHO: Recommendations on antenatal care for a positive pregnancy experience', url: 'https://www.who.int/publications/i/item/9789241549912' },
      { label: 'NICE: Antenatal care (NG201)', url: 'https://www.nice.org.uk/guidance/ng201' },
      { label: 'CDC: Urgent Maternal Warning Signs and Symptoms', url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html' },
      { label: 'NHS: Ectopic pregnancy', url: 'https://www.nhs.uk/conditions/ectopic-pregnancy/' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Talk with the clinic about pregnancy care.',
    related: ['preconception-care', 'menstrual-health', 'when-to-see-gynaecologist'],
  },
  {
    slug: 'menstrual-health',
    title: 'Understanding Menstrual Health',
    intro: 'Cycle patterns and symptoms vary, but persistent changes are worth discussing. Learn about irregular, heavy or unexpected bleeding and when to seek care.',
    readingTime: '4 min read',
    metaDescription: 'General information about menstrual cycles, heavy or irregular periods and when to consult a healthcare professional.',
    keyTakeaways: [
      'Cycle patterns differ, and a change that is persistent or troubling is worth discussing.',
      'Heavy, painful or unexpected bleeding can have different causes and may need assessment.',
      'Bleeding with possible pregnancy and abdominal pain needs urgent medical advice.',
    ],
    sections: [
      {
        heading: 'Know your usual pattern',
        blocks: [
          { text: 'Menstrual cycles vary between individuals and may change during adolescence, after pregnancy and near menopause. NHS information describes cycles shorter than 21 days or longer than 35 days as irregular, but a number alone is not a diagnosis. Persistent change, symptoms and your personal context matter.' },
          { text: 'If useful, note the first day of each period, how long bleeding lasts, pain, flow changes and any bleeding between periods or after sex. This can help you describe what has changed.' },
        ],
      },
      {
        heading: 'Heavy or painful periods',
        blocks: [
          { text: 'Periods may be considered heavy when bleeding disrupts daily life—for example, needing to change menstrual products every one to two hours, bleeding for more than seven days, or avoiding normal activities. These are examples, not a diagnostic checklist. Heavy bleeding can have several causes; a clinician can discuss whether assessment or checks for anaemia are appropriate.' },
          { text: 'Severe period pain or pain that affects school, work, sleep or daily activities is also worth discussing. Do not assume you need to tolerate symptoms that concern you.' },
        ],
      },
      {
        heading: 'Unexpected bleeding',
        blocks: [
          { text: 'Bleeding between periods, after sex or after menopause should be discussed with a healthcare professional. There can be many causes, and an assessment helps determine whether further care is needed.' },
          { type: 'callout', title: 'Possible pregnancy with pain or bleeding', tone: 'urgent', text: 'If pregnancy is possible and you have unusual bleeding with abdominal or pelvic pain, seek urgent medical assessment. Sudden intense pain with dizziness, fainting or marked paleness is an emergency warning sign.' },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to book a consultation',
      blocks: [
        { text: 'Arrange medical advice for persistent irregular periods, heavy bleeding that affects daily life, severe pain, bleeding between periods or after sex, or any bleeding after menopause. Seek urgent care if bleeding is accompanied by possible pregnancy and abdominal pain, or if you feel faint or severely unwell.' },
      ],
    },
    urgentNote: null,
    faqs: [
      { question: 'What counts as an irregular cycle?', answer: 'Cycle length varies. NHS guidance gives under 21 days or over 35 days as examples of irregular timing, but these limits are not a diagnosis and do not replace assessment of your individual situation.' },
      { question: 'Should I get help for heavy periods?', answer: 'If bleeding affects daily life, lasts longer than usual, or concerns you, contact a healthcare professional. They can discuss possible causes and whether evaluation is needed.' },
      { question: 'Is bleeding after menopause something to check?', answer: 'Yes. Arrange medical assessment for any bleeding after menopause, even though there are many possible causes.' },
    ],
    references: [
      { label: 'NHS: Irregular periods', url: 'https://www.nhs.uk/symptoms/irregular-periods/' },
      { label: 'NHS: Heavy periods', url: 'https://www.nhs.uk/conditions/heavy-periods/' },
      { label: 'NICE: Heavy menstrual bleeding (NG88)', url: 'https://www.nice.org.uk/guidance/ng88' },
      { label: 'NHS: Vaginal bleeding between periods or after sex', url: 'https://www.nhs.uk/symptoms/vaginal-bleeding-between-periods-or-after-sex/' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Get support for menstrual health concerns.',
    related: ['pcos', 'when-to-see-gynaecologist', 'preventive-health'],
  },
  {
    slug: 'when-to-see-gynaecologist',
    title: 'When to See a Gynaecologist',
    intro: 'You can ask for help with persistent changes, pain or reproductive health questions. This guide explains what to expect and when to seek urgent attention.',
    readingTime: '4 min read',
    metaDescription: 'Learn when to seek gynaecological care for menstrual, pelvic, reproductive or breast concerns, and when to seek urgent help.',
    keyTakeaways: [
      'You can seek advice for persistent changes, pain or concerns about reproductive health.',
      'Bleeding between periods, after sex or after menopause should be assessed.',
      'Severe pain, fainting, heavy bleeding or possible pregnancy with pain can require urgent care.',
    ],
    sections: [
      {
        heading: 'Concerns you can bring to a visit',
        blocks: [
          { text: 'Consider booking an appointment if menstrual changes persist, period pain affects daily activities, you notice bleeding between periods or after sex, or you have questions about contraception, fertility, menopause or sexual and reproductive health. You do not need to wait until a concern becomes severe to ask for advice.' },
          { text: 'New breast or underarm lumps, nipple or skin changes, or other new breast changes should also be assessed. These changes can have non-cancer causes, but a clinician should help determine what evaluation is appropriate.' },
        ],
      },
      {
        heading: 'What to expect',
        blocks: [
          { text: 'A consultation often begins with a conversation about your symptoms, cycle, health history, medicines and concerns. The clinician can explain whether an examination or tests are recommended and discuss the reasons with you. You can ask questions and share any preferences or worries.' },
          { type: 'list', title: 'Before your appointment, you may want to note:', items: ['When symptoms began and what makes them better or worse.', 'Dates and pattern of periods or bleeding, if relevant.', 'Medicines, supplements, allergies and previous medical conditions.', 'Your most important questions and what you hope to understand.'] },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to seek urgent care',
      blocks: [
        { text: 'Seek urgent assessment for severe or sudden pelvic or abdominal pain, heavy bleeding with weakness or fainting, or unusual bleeding with abdominal pain when pregnancy is possible. Sudden intense pain with dizziness, fainting or marked paleness can indicate a medical emergency. Use local emergency services for severe or immediately dangerous symptoms.' },
      ],
    },
    urgentNote: { title: 'Do not wait for a routine appointment', text: 'If pregnancy is possible and unusual bleeding occurs with abdominal or pelvic pain, get urgent medical advice. Sudden severe pain, fainting, dizziness or marked paleness needs emergency assessment.' },
    faqs: [
      { question: 'Do I need a specific symptom before seeing a gynaecologist?', answer: 'No. You can arrange a consultation to discuss questions, persistent changes or concerns about your reproductive health.' },
      { question: 'Will I need an examination at every visit?', answer: 'Not necessarily. The clinician will discuss your concern and explain whether an examination or tests may help. You can ask questions before deciding on next steps.' },
      { question: 'Should I wait if I have bleeding after menopause?', answer: 'No. Arrange medical assessment for any bleeding after menopause. If you feel severely unwell or have severe pain, seek urgent care.' },
    ],
    references: [
      { label: 'NHS: Vaginal bleeding between periods or after sex', url: 'https://www.nhs.uk/symptoms/vaginal-bleeding-between-periods-or-after-sex/' },
      { label: 'NHS: Ectopic pregnancy', url: 'https://www.nhs.uk/conditions/ectopic-pregnancy/' },
      { label: 'CDC: Urgent Maternal Warning Signs and Symptoms', url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html' },
      { label: 'CDC: Symptoms of Breast Cancer', url: 'https://www.cdc.gov/breast-cancer/symptoms/index.html' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Talk with a clinician about a concern.',
    related: ['menstrual-health', 'healthy-pregnancy', 'preventive-health'],
  },
  {
    slug: 'preconception-care',
    title: 'Preconception Care',
    intro: 'Planning ahead gives you an opportunity to review health conditions, medicines and personal questions. Learn about folic acid guidance and what to discuss before pregnancy.',
    readingTime: '4 min read',
    metaDescription: 'Information to help prepare for pregnancy, review health conditions and medicines, and discuss folic acid with a clinician.',
    keyTakeaways: [
      'A preconception conversation can help review health conditions, medicines, vaccinations and personal questions.',
      'CDC advises 400 micrograms of folic acid daily, starting at least one month before pregnancy; individual needs may differ.',
      'Do not stop prescribed medicine or change treatment without advice from the prescriber.',
    ],
    sections: [
      {
        heading: 'Why plan ahead?',
        blocks: [
          { text: 'A preconception visit is an opportunity to discuss your health and questions before pregnancy. A clinician may review ongoing conditions, previous pregnancies, medicines and supplements, vaccinations, family history and any concerns about fertility or wellbeing.' },
          { text: 'What is relevant depends on your circumstances. Bring a list of medicines and supplements and ask whether any condition or treatment needs review before trying to conceive.' },
        ],
      },
      {
        heading: 'Folic acid and everyday health',
        blocks: [
          { text: 'The CDC advises people who could become pregnant to take 400 micrograms of folic acid daily, beginning at least one month before pregnancy and continuing during early pregnancy, to help reduce the risk of neural tube defects. Some people may need a different dose under clinical guidance; ask a healthcare professional what is right for you and follow local recommendations.' },
          { text: 'Pregnancy planning is also a time to discuss alcohol, tobacco or other substances, potentially harmful exposures, nutrition, physical and mental health, and any questions about vaccination. Advice should be tailored to your health and location.' },
        ],
      },
      {
        heading: 'Review medicines with your clinician',
        blocks: [
          { type: 'callout', title: 'Do not stop treatment on your own', tone: 'helpful', text: 'Some medicines need review before pregnancy, but stopping a prescribed medicine can also carry risks. Speak with the clinician who prescribed it before making a change.' },
          { text: 'If you have a long-term condition or take regular medication, ask who should coordinate your care. A clinician can discuss the balance of benefits and risks for your individual situation.' },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to arrange a preconception discussion',
      blocks: [
        { text: 'Consider speaking with a healthcare professional before trying to conceive, especially if you have a long-term health condition, take regular medicines, have questions about supplements or vaccination, or would like to discuss a previous pregnancy or fertility concern.' },
      ],
    },
    urgentNote: null,
    faqs: [
      { question: 'When should I start folic acid?', answer: 'CDC guidance advises 400 micrograms daily starting at least one month before pregnancy and continuing during early pregnancy. Your needs may differ, so ask a clinician and follow local guidance.' },
      { question: 'Should I stop my medicines before trying to conceive?', answer: 'Do not stop or change a prescribed medicine without speaking to the prescriber or another qualified clinician. They can discuss the safest plan for your condition and pregnancy goals.' },
      { question: 'What should I bring to a preconception appointment?', answer: 'A list of medicines and supplements, relevant health information, previous pregnancy records if applicable, and questions you want answered can help guide the discussion.' },
    ],
    references: [
      { label: 'CDC: Planning for Pregnancy', url: 'https://www.cdc.gov/pregnancy/about/index.html' },
      { label: 'WHO: Recommendations on antenatal care for a positive pregnancy experience', url: 'https://www.who.int/publications/i/item/9789241549912' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Plan a conversation about pregnancy.',
    related: ['healthy-pregnancy', 'pcos', 'menstrual-health'],
  },
  {
    slug: 'preventive-health',
    title: 'Women’s Preventive Health',
    intro: 'Preventive care includes conversations about cervical screening, HPV vaccination, breast health and menopause. Recommendations vary, so learn what to discuss with a clinician.',
    readingTime: '5 min read',
    metaDescription: 'Patient information about cervical screening, HPV vaccination, breast changes, menopause and individualized preventive care.',
    keyTakeaways: [
      'Screening recommendations depend on your country, age, personal history and risk.',
      'Screening is preventive and does not replace assessment of symptoms.',
      'Discuss new breast changes, bleeding after menopause and health questions with a clinician.',
    ],
    sections: [
      {
        heading: 'Cervical screening and HPV vaccination',
        blocks: [
          { text: 'Cervical screening looks for changes that may need follow-up before they become cancer. The ages, intervals and tests used differ between countries and may depend on personal risk. A screening invitation is not the same as an assessment for symptoms.' },
          { text: 'HPV vaccination helps prevent new infections from targeted HPV types; it does not treat an existing HPV infection or replace recommended screening. Ask a healthcare professional about the schedule recommended where you live and what is appropriate for your age and history.' },
        ],
      },
      {
        heading: 'Breast health and menopause',
        blocks: [
          { text: 'Notice new breast or underarm lumps, skin or nipple changes, bloody nipple discharge, or other changes and arrange medical assessment. These signs can have causes other than cancer, but should not be ignored while waiting for a routine screening invitation. Screening mammography schedules vary by location and individual risk.' },
          { text: 'Perimenopause and menopause are normal life stages, but symptoms differ. A clinician can discuss symptom support and whether further assessment is relevant. Any bleeding after menopause should be checked, even though there are many possible causes.' },
        ],
      },
      {
        heading: 'Preventive care is personal',
        blocks: [
          { text: 'There is no single schedule or set of tests that applies to everyone worldwide. Your care may be influenced by your age, symptoms, medical and family history, previous results, pregnancy history and local recommendations. Ask what a test is for, what its limitations are, and when to expect results.' },
          { text: 'Mental wellbeing is also part of health. If low mood, anxiety or other emotional concerns persist or affect daily life, consider discussing them with a healthcare professional.' },
        ],
      },
    ],
    whenToConsult: {
      heading: 'When to contact a healthcare professional',
      blocks: [
        { text: 'Arrange advice for new breast changes, unusual vaginal bleeding, bleeding after menopause, persistent symptoms or questions about screening and vaccination. Seek urgent care for severe pain, heavy bleeding with faintness, or another rapidly worsening or immediately dangerous symptom.' },
      ],
    },
    urgentNote: null,
    faqs: [
      { question: 'At what age should I start cervical screening?', answer: 'There is no single worldwide age or interval. Recommendations differ by country and individual risk. Ask a clinician or local screening program what applies where you live.' },
      { question: 'Does cervical screening check symptoms?', answer: 'Screening is for people without symptoms as part of a preventive program. Symptoms such as unusual bleeding need clinical assessment even if you are up to date with screening.' },
      { question: 'Does HPV vaccination mean I do not need screening?', answer: 'No. HPV vaccines do not cover every cancer-causing HPV type and do not treat existing infection. Follow the cervical screening recommendations that apply to you.' },
      { question: 'Should I get bleeding after menopause checked?', answer: 'Yes. Arrange medical assessment for any bleeding after menopause, even though it is not usually serious.' },
    ],
    references: [
      { label: 'WHO: Cervical cancer', url: 'https://www.who.int/news-room/fact-sheets/detail/cervical-cancer' },
      { label: 'WHO: Guideline for screening and treatment of cervical pre-cancer lesions', url: 'https://www.who.int/publications/i/item/9789240030824' },
      { label: 'CDC: HPV Vaccination Considerations', url: 'https://www.cdc.gov/hpv/hcp/vaccination-considerations/' },
      { label: 'CDC: Symptoms of Breast Cancer', url: 'https://www.cdc.gov/breast-cancer/symptoms/index.html' },
      { label: 'NICE: Menopause: identification and management (NG23)', url: 'https://www.nice.org.uk/guidance/ng23' },
      { label: 'NHS: Post-menopausal bleeding', url: 'https://www.nhs.uk/symptoms/post-menopausal-bleeding/' },
    ],
    sourcesChecked: '7 October 2026',
    cta: 'Ask about preventive care that fits your needs.',
    related: ['when-to-see-gynaecologist', 'menstrual-health', 'pcos'],
  },
]
