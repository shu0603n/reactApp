import React, { FunctionComponent } from 'react';
import styles from './topPage.module.css'

// User型を定義
interface User {
  id: number;
  username: string;
}

interface Props {
  data: User[];
}

const TopPageComponent: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className={styles.test}>
      <h1>社員一覧</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPageComponent;
