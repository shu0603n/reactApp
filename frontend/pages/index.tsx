import TopPageComponent from '@/app/components/pages/topPage/topPage';
import { useState, useEffect } from 'react';

// User型を定義
interface User {
  id: number;
  username: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        throw new Error('データの取得に失敗しました');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <TopPageComponent data= {users}/>
  );
}
