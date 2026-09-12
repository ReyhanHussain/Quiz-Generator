import React from 'react'

function SettingCard({ header, para, options, classForCard }) {
    return (
        <div className="outerCardSetting">
            <div className='topHeaderOfCard'>
                <h4>{header}</h4>
                <p>{para}</p>
            </div>
            <div className="optionsForCard">
                {
                    options.map((singleOpt,i) => {

                        return <div key={i} className={classForCard}>
                            {singleOpt?.icon}
                            {singleOpt?.text}
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default SettingCard