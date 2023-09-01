import { useState, useEffect } from 'react';

// User型を定義
interface User {
  id: number;
  username: string;
}

export default function Test() {
  const [users, setUsers] = useState<User[]>([]);

  
  return (
    <div>
      <h1>社員一覧</h1>

    </div>
  );
}
