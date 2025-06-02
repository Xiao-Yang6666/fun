import fs from 'fs';
import path from 'path';

export const runtime = "nodejs";

// 存储上传的JSON数据的文件路径
const dataFilePath = path.join(process.cwd(), 'data', 'uploaded_data.json');

export async function GET() {
  try {
    // 检查文件是否存在
    if (!fs.existsSync(dataFilePath)) {
      return new Response(JSON.stringify({ success: false, message: '没有可用的数据' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 404,
      });
    }
    
    // 读取文件内容
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    let data;
    
    try {
      // 尝试解析JSON
      data = JSON.parse(fileContent);
    } catch (parseError) {
      return new Response(JSON.stringify({ success: false, message: 'JSON解析失败', error: (parseError as Error).message }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 500,
      });
    }
    
    // 返回数据
    return new Response(JSON.stringify({ success: true, data }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    // 返回错误响应
    console.error('获取数据时出错:', error);
    return new Response(JSON.stringify({ success: false, message: '获取数据失败', error: (error as Error).message }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
} 