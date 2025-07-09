import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mt-10 p-8 bg-white/50 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
        欢迎来到我的数字作品展
      </h1>
      <p className="text-lg text-black max-w-2xl mx-auto">
        本站是我的学习成果展示平台，囊括了运用 Next.js、React 及 Tailwind CSS 构建的交互式项目。您可以通过上方导航探索我的作品集，或体验 QAnything 智能问答，感受 AI 的魅力。
      </p>
    </div>
  );
}
