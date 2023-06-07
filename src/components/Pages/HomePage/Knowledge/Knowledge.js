import React from "react";
import "./Knowledge.css";
import { useTheme } from "../../../../hooks/useTheme";

const Knowledge = () => {
  const theme = useTheme();

  const allData = [
    {
      img: "https://wordpress-theme.spider-themes.net/docly/wp-content/uploads/2020/03/Lamp_idea.png",
      title: "Knowledge Base",
      paragraph: "Oxford bonnet are you taking the piss cheeky mufty.",
    },
    {
      img: "https://wordpress-theme.spider-themes.net/docly/wp-content/uploads/2020/03/chat.png",
      title: "Community Forums",
      paragraph: "Oxford bonnet are you taking the piss cheeky mufty.",
    },
    {
      img: "https://wordpress-theme.spider-themes.net/docly/wp-content/uploads/2020/03/Duplicate.png",
      title: "Documentation",
      paragraph: "Oxford bonnet are you taking the piss cheeky mufty.",
    },
  ];
  return (
    <div className="main-khowledge">
      <div className="container">
        <div className="knowledge-section">
          {allData.map((data, i) => (
            <div key={i} className="single-knowledge ">
              <div className="img">
                <img src={data.img} alt="Images" />
              </div>
              <div className="content">
                <h1
                  className={`${
                    theme === "dark" ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  {data.title}
                </h1>
                <p>{data.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
