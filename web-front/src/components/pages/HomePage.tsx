import React, { useEffect, useState } from "react";
import GenericTemplate from "../templates/GenericTemplate";

const HomePage: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <GenericTemplate title="トップページ">
      <div>トップページ内容</div>
      <div>取得したデータ: {JSON.stringify(data)}</div>
    </GenericTemplate>
  );
};

export default HomePage;
