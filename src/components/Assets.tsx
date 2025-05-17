import { FC } from "react";

interface IProps {
    addAsset: (image: string, title: string) => void;
}

interface IAsset {
    id: number;
    path: string;
    name: string;
}

const Assets: FC<IProps> = ({ addAsset }) => {
    const ASSETS: IAsset[] = [
        {
            id: 0,
            path: "/stickers/Gunman_Sprite.webp",
            name: "Gunman Sprite",
        },
        {
            id: 1,
            path: "/stickers/Chad_Sprite.webp",
            name: "Chad Sprite",
        },
        {
            id: 2,
            path: "/stickers/Disguised_Sprite.webp",
            name: "Disguised Sprite",
        },
        {
            id: 3,
            path: "/stickers/Intellectual_Sprite.webp",
            name: "Intellectual Sprite",
        },
        {
            id: 4,
            path: "/stickers/Magnifying_Sprite.webp",
            name: "Magnifying Sprite",
        },
        {
            id: 5,
            path: "/stickers/Pizza_Chef_Sprite.webp",
            name: "Pizza Chef Sprite",
        },
        {
            id: 6,
            path: "/stickers/Eyes_Closed_Sprite.webp",
            name: "Closed Eyes Sprite",
        },
        {
            id: 7,
            path: "/stickers/Winking_Sprite.webp",
            name: "Winking Sprite",
        },
        {
            id: 8,
            path: "/stickers/Mini_Main_Character_Puppet_1.webp",
            name: "Mini Sprite",
        },
        {
            id: 9,
            path: "/stickers/Mini_Main_Green.webp",
            name: "Mini Green Sprite",
        },
        {
            id: 10,
            path: "/stickers/Champion_Sprite.webp",
            name: "Champion Sprite",
        },
        {
            id: 11,
            path: "/stickers/Champion_Sprite_2.webp",
            name: "Champion Pepe Sprite",
        },
    ];
    return (
        <div className="flex-1/2">
            <h2 className="text-center text-3xl font-bold text-white pb-2">
                <span className="text-irys-main">Irys</span> assets
            </h2>

            <div className="flex flex-wrap gap-4">
                {ASSETS.map((asset) => (
                    <button
                        key={asset.id}
                        onClick={() => addAsset(asset.path, asset.name)}
                        className="cursor-pointer hover:bg-irys-main transition-all bg-white p-3 rounded-2xl aspect-square flex flex-col justify-around"
                    >
                        <img
                            src={asset.path}
                            alt="sticker"
                            className="max-w-25"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Assets;
