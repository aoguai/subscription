import fs from 'node:fs/promises';

// 从 README.md 中解析出 GROUP_SIZE、GLOBALGROUP_SIZE 和 VERSION 的值
const parseReadMeMd = async () => {
  const readmePath = process.cwd() + '/dist/README.md';
  const readmeContent = await fs.readFile(readmePath, 'utf-8');

  // 使用正则表达式匹配需要的值
  const groupSizeMatch = readmeContent.match(/\|应用规则\|(\d+)\|/);
  const globalGroupSizeMatch = readmeContent.match(/\|全局规则\|(\d+)\|/);
  const versionMatch = readmeContent.match(/v(\d+)/);

  const GROUP_SIZE = groupSizeMatch ? groupSizeMatch[1] : '';
  const GLOBALGROUP_SIZE = globalGroupSizeMatch ? globalGroupSizeMatch[1] : '';
  const VERSION = versionMatch ? versionMatch[1] : '';

  return { GROUP_SIZE, GLOBALGROUP_SIZE, VERSION };
};

// 更新 README.md 的模板内容并写入文件
export const updateReadMeMd = async () => {
  const { GROUP_SIZE, GLOBALGROUP_SIZE, VERSION } = await parseReadMeMd();

  const mdTemplatePath = process.cwd() + '/Template.md';
  const readmeMdPath = process.cwd() + '/README.md';

  // 读取模板文件
  const mdTemplate = await fs.readFile(mdTemplatePath, 'utf-8');

  // 替换模板中的占位符
  const readMeMdText = mdTemplate
    .replace('--GROUP_SIZE--', GROUP_SIZE)
    .replace('--GLOBALGROUP_SIZE--', GLOBALGROUP_SIZE)
    .replace('--VERSION--', VERSION);

  // 写入 README.md 文件
  await fs.writeFile(readmeMdPath, readMeMdText);
};
