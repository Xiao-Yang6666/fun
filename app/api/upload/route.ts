import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = "nodejs";

// 存储上传的JSON数据的文件路径
const dataFilePath = path.join(process.cwd(), 'data', 'uploaded_data.json');

// 确保data目录存在
const ensureDirectoryExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

export async function POST(request: NextRequest) {
  try {
    // 确保目录存在
    ensureDirectoryExists();
    
    // 解析请求体中的JSON数据
    const data = await request.json();
    
    // 将数据写入文件
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    
    // 返回成功响应
    return new Response(JSON.stringify({ success: true, message: '数据上传成功' }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    // 返回错误响应
    console.error('上传数据时出错:', error);
    return new Response(JSON.stringify({ success: false, message: '数据上传失败', error: (error as Error).message }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
} 