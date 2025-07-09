import fs from 'fs';
import path from 'path';
import PortfolioCarousel from '../components/PortfolioCarousel';

// 定义作品类型
type Assignment = {
  filename: string;
  name: string;
};

// 辅助函数，用于将文件名转换为更易读的标题
function formatAssignmentName(filename: string): string {
  return filename
    .replace('.html', '') // 移除扩展名
    .replace(/[-_]/g, ' ') // 将连字符和下划线替换为空格
    .replace(/\b\w/g, (char) => char.toUpperCase()); // 将每个单词的首字母大写
}

export default function PortfolioPage() {
  // 在服务器端读取 public 目录下的文件
  const assignmentsDirectory = path.join(process.cwd(), 'public', 'assignments');
  let assignments: Assignment[] = [];

  try {
    const filenames = fs.readdirSync(assignmentsDirectory);
    assignments = filenames
      .filter((file) => file.endsWith('.html'))
      .map((filename) => ({
        filename,
        name: formatAssignmentName(filename),
      }));
  } catch (error) {
    console.error('无法读取作品集目录:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">我的作品集</h1>
        <p className="text-red-500 text-center">加载作品列表时出错，请检查服务器日志。</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">我的作品集</h1>
      {assignments.length > 0 ? (
        <PortfolioCarousel assignments={assignments} />
      ) : (
        <div className="text-center bg-white/50 p-8 rounded-lg">
          <p className="text-lg text-gray-700">
            作品集为空。
          </p>
          <p className="text-sm text-gray-600 mt-2">
            请将您的 .html 文件添加到 `public/assignments` 目录下。
          </p>
        </div>
      )}
    </div>
  );
} 