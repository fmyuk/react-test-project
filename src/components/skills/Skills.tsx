import React, { useEffect, useState } from "react";
import { SkillProps } from "./Skills.types";

const Skills = ({ skills }: SkillProps) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 1500);
  }, []);

  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>ログアウト</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>ログイン</button>
      )}
    </div>
  );
};

export default Skills;
