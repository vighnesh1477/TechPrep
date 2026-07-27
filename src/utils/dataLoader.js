const modules = {

  aiml: () => import('../../data/aiml.js'),

  c: () => import('../../data/c.js'),

  cn: () => import('../../data/cn.js'),

  cpp: () => import('../../data/cpp.js'),

  cyber: () => import('../../data/cyber.js'),

  dbms: () => import('../../data/dbms.js'),

  dsa: () => import('../../data/dsa.js'),

  fullStack: () => import('../../data/fullStack.js'),

  git: () => import('../../data/Git.js'),

  java: () => import('../../data/java.js'),

  linux: () => import('../../data/linux.js'),

  oops: () => import('../../data/oops.js'),

  os: () => import('../../data/os.js'),

  placement_fundamentals: () => import('../../data/placement_fundamentals.js'),

  python: () => import('../../data/python.js'),

  software_engineering: () => import('../../data/software_engineering.js'),

  sql: () => import('../../data/sql.js'),

  cloud: () => import('../../data/cloud.js'),

};



export async function loadQuestions(slug) {

  const loader = modules[slug];

  if (!loader) throw new Error('Unknown topic: ' + slug);



  const mod = await loader();

  const data = mod.default;



  if (!Array.isArray(data)) {

    throw new Error('Invalid data format for: ' + slug);

  }



  return data;

}