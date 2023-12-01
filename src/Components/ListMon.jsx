import React from "react";
import Mon from "./Mon"
import "./ListMon.css"

export default function ListMon() {
    const monList = [
        {
            id: 1,
            nameClan: "Clan de la Grue",
            src: "src/assets/grueMon.webp",
            alt: "Le mon du clan de la grue"
        },
        {
            id: 2,
            nameClan: "Clan du Lion",
            src: "src/assets/lionMon.webp",
            alt: "Le mon du clan du lion"
        },
        {
            id: 3,
            nameClan: "Doji Hotaru",
            src: "src/assets/dojiHotaru.webp",
            alt: "Doji Hotaru"
        }
    ]
    return (
        <div className="container">
            {
                monList.map(
                    (clanInfo) => {
                        return (
                            <div className="mon" key={clanInfo.id}>
                                <Mon name={clanInfo.nameClan} imgSrc={clanInfo.src} imgAlt={clanInfo.alt} />
                            </div>
                        )
                    }
                )}
        </div>
    )
}