import React from 'react'
import SettingCard from '../components/SettingCard'

import {
    CircleDot,
    SquareText,
    RectangleEllipsis,
    Blender,
    Gauge,
    ListOrdered,
    Clock3,
    Lightbulb,
    Brain,
    Settings2,
    Target,
    MinusCircle,
    SlidersHorizontal,
    Trophy,
    Shuffle,
    List,
    Eye,
    EyeOff,
    Lock
} from 'lucide-react'

function Settings() {
    return (
        <div className="loaderOuterContainer">

            <div className="innerSettingsContainer">

                {/* Quiz Type */}
                <SettingCard
                    classForCard={'cardsInfo'}
                    header={'Quiz Type.'}
                    para={'choose appropriate type'}
                    options={[
                        {
                            icon: <CircleDot />,
                            text: 'MCQ'
                        },
                        {
                            icon: <SquareText />,
                            text: 'Text'
                        },
                        {
                            icon: <RectangleEllipsis />,
                            text: 'Fill'
                        },
                        {
                            icon: <Blender />,
                            text: 'Mixed'
                        }
                    ]}
                />


                {/* Difficulty */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Difficulty.'}
                    para={'how challenging should it be'}
                    options={[
                        {
                            icon: <Gauge />,
                            text: 'Easy'
                        },
                        {
                            icon: <Gauge />,
                            text: 'Medium'
                        },
                        {
                            icon: <Gauge />,
                            text: 'Hard'
                        },
                        {
                            icon: <Settings2 />,
                            text: 'Mixed'
                        }
                    ]}
                />


                {/* Number of Questions */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Number of Questions.'}
                    para={'how many questions?'}
                    options={[
                        {
                            icon: <ListOrdered />,
                            text: '5'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '10'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '20'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '30'
                        }
                    ]}
                />
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Number of Questions.'}
                    para={'how many questions?'}
                    options={[
                        {
                            icon: <ListOrdered />,
                            text: '5'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '10'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '20'
                        },
                        {
                            icon: <ListOrdered />,
                            text: '30'
                        }
                    ]}
                />

                {/* Time Limit */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Time Limit.'}
                    para={'set a time limit'}
                    options={[
                        {
                            icon: <Clock3 />,
                            text: 'None'
                        },
                        {
                            icon: <Clock3 />,
                            text: '10 min'
                        },
                        {
                            icon: <Clock3 />,
                            text: '20 min'
                        },
                        {
                            icon: <Clock3 />,
                            text: '30 min'
                        }
                    ]}
                />


                {/* Question Style */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Question Style.'}
                    para={'how should questions test you?'}
                    options={[
                        {
                            icon: <Lightbulb />,
                            text: 'Recall'
                        },
                        {
                            icon: <Brain />,
                            text: 'Conceptual'
                        },
                        {
                            icon: <Target />,
                            text: 'Application'
                        },
                        {
                            icon: <Blender />,
                            text: 'Mixed'
                        }
                    ]}
                />


                {/* Scoring */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Scoring.'}
                    para={'how should answers be scored?'}
                    options={[
                        {
                            icon: <Trophy />,
                            text: 'Standard'
                        },
                        {
                            icon: <MinusCircle />,
                            text: 'Negative'
                        },
                        {
                            icon: <SlidersHorizontal />,
                            text: 'Custom'
                        },
                        {
                            icon: <Blender />,
                            text: 'Mixed'
                        }
                    ]}
                />


                {/* Question Order */}
                <SettingCard
                    classForCard={'cardsInfo orderQuestion'}

                    header={'Question Order.'}
                    para={'choose question arrangement'}
                    options={[
                        {
                            icon: <List />,
                            text: 'Sequential'
                        },
                        {
                            icon: <Shuffle />,
                            text: 'Shuffle'
                        }
                    ]}
                />


                {/* Answer Reveal */}
                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Answer Reveal.'}
                    para={'when should answers be shown?'}
                    options={[
                        {
                            icon: <Eye />,
                            text: 'Immediately'
                        },
                        {
                            icon: <EyeOff />,
                            text: 'After'
                        },
                        {
                            icon: <Lock />,
                            text: 'Never'
                        }
                    ]}
                />

                <SettingCard
                    classForCard={'cardsInfo'}

                    header={'Quiz Summary.'}
                    para={'review your settings before generating'}

                    options={[
                        {
                            icon: <ListOrdered />,
                            text: '10 Questions'
                        },
                        {
                            icon: <Gauge />,
                            text: 'Medium'
                        },
                        {
                            icon: <CircleDot />,
                            text: 'MCQ'
                        },
                        {
                            icon: <Clock3 />,
                            text: '20 min'
                        },
                        {
                            icon: <Brain />,
                            text: 'Conceptual'
                        },
                        {
                            icon: <Shuffle />,
                            text: 'Shuffle'
                        },
                        {
                            icon: <EyeOff />,
                            text: 'After'
                        }
                    ]}
                />
             <div className="btnGen">
                   <button >Generate Quiz</button>
             </div>


            </div>

        </div>
    )
}

export default Settings