import React, { useState, useEffect } from "react";
import "./bookmark.css";

function Bookmark() {
    const [apps, setApps] = useState(() => {
        const savedApps = localStorage.getItem("apps");
        return savedApps ? JSON.parse(savedApps) : [
            { name: "Youtube", link: "https://www.youtube.com" },
            { name: "ChatGPT", link: "https://chat.openai.com/?model=text-davinci-002-render-sha" },
            { name: "Chess", link: "https://www.chess.com/home" },
        ];
    });

    useEffect(() => {
        const savedApps = localStorage.getItem("apps");
        if (savedApps) {
            setApps(JSON.parse(savedApps));
        }
    }, []);

    const handleAddApp = () => {
        const newAppLink = prompt("Enter the Link of the App:");
        const newAppName = prompt("Enter the Name of the App:");
        const newApp = { name: newAppName, link: `https://${newAppLink}` };
        const updatedApps = [...apps, newApp];
        setApps(updatedApps);
        localStorage.setItem("apps", JSON.stringify(updatedApps));
    };

    const handleRemoveApp = () => {
        const appNumber = parseInt(prompt("Enter the number of the app to remove:"), 10);
        if (!isNaN(appNumber) && appNumber >= 1 && appNumber <= apps.length) {
            const updatedApps = apps.filter((_, index) => index !== appNumber - 1);
            setApps(updatedApps);
            localStorage.setItem("apps", JSON.stringify(updatedApps));
        } else {
            alert("Invalid app number.");
        }
    };

    return (
        <>
        <div id="recommended-apps">
            {apps.map((app, index) => (
                <div key={index} className="app-item">
                    <a href={app.link} target="_blank" rel="noopener noreferrer" className="app-link">
                        {app.name}
                    </a>
                </div>
            ))}
        </div>
        
        <button style={{backgroundColor: "rgba(0,0,0,0)",color:"white" }} onClick={handleAddApp}>Add App</button>
        <button style={{backgroundColor: "rgba(0,0,0,0)", color:"white" }} onClick={handleRemoveApp}>Remove App</button>
        </>
    );
}

export default Bookmark;
