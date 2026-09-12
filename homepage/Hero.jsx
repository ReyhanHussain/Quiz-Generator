import { FileText, Link, CloudUpload, Sparkles, TextInitial } from "lucide-react";
import Navbar from "../components/Navbar";

function Hero() {
    return (
        <>
            <Navbar />

            <div className="heroSection">
                <div className="heroWordings">
                    <h1>Turn Anything into</h1>
                    <h2><i>Engaging Quizzes</i></h2>
                    <p>Paste your notes, upload a file, or type a topic <br />we'll create beautiful quizzes in seconds.</p>
                </div>
                <div className="promptBox">

                    <div className="innerBox">
                        <textarea
                            placeholder="What do you want to study..."
                        />

                        <div className="optionsForPromptBox">

                            <div className="uploadType">

                                <button>
                                    <TextInitial color="blue" size={20} />
                                </button>

                                <button>
                                    <Link color="blue" size={20} />
                                </button>

                                <button>
                                    <CloudUpload color="blue" size={20} />
                                </button>

                            </div>

                            <button className="searchNow">
                                <Sparkles size={15} color="blue" />
                            </button>

                        </div>
                    </div>
                </div>

            </div>
          
        </>

    );
}

export default Hero;