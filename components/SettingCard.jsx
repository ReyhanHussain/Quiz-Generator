import React from "react";

function SettingCard({
  header,
  para,
  options,
  classForCard,
  settingName,
  value,
  setQuizSettings,
  readOnly = false,
}) {
  return (
    <div className="outerCardSetting">

      <div className="topHeaderOfCard">
        <h4>{header}</h4>
        <p>{para}</p>
      </div>

      <div className="optionsForCard">
        {options.map((singleOpt, i) => {
          const isSelected = value === singleOpt.text;

          return (
            <button
              key={i}
              type="button"
              className={
                isSelected
                  ? `${classForCard} selected`
                  : classForCard
              }
              onClick={() => {
                if (readOnly) return;
                
                setQuizSettings((prev) => ({
                  ...prev,
                  [settingName]: singleOpt.text,
                }));
              }}
            >
              {singleOpt?.icon}
              {singleOpt?.text}
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default SettingCard;