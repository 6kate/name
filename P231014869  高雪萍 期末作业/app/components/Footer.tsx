import WakaTimeStats from './WakaTimeStats';

export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-sm text-gray-800 p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          <WakaTimeStats />
        </p>
        <p>&copy; {new Date().getFullYear()} 课程期末作业</p>
      </div>
    </footer>
  );
} 