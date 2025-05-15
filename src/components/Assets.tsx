import { FC } from "react";

interface IProps {
    addAsset: (image: string, title: string) => void;
}

const Assets: FC<IProps> = ({ addAsset }) => {
    return (
        <div className="flex-1/2">
            <h2 className="text-center text-3xl font-bold text-white pb-2">
                <span className="text-irys-main">Irys</span> assets
            </h2>

            <div className="flex flex-wrap gap-4">
                <button
                    onClick={() =>
                        addAsset(
                            "/stickers/Gunman_Sprite.webp",
                            "Gunman Sprite"
                        )
                    }
                    className="cursor-pointer hover:bg-irys-main transition-all bg-white p-3 rounded-2xl aspect-square flex flex-col justify-around"
                >
                    <img
                        src="/stickers/Gunman_Sprite.webp"
                        alt="gunman"
                        className="max-w-25"
                    />
                </button>
                <button
                    onClick={() =>
                        addAsset(
                            "/stickers/Gunman_Sprite.webp",
                            "Gunman Sprite"
                        )
                    }
                    className="cursor-pointer hover:bg-irys-main transition-all bg-white p-3 rounded-2xl aspect-square flex flex-col justify-around"
                >
                    <img
                        src="/stickers/Gunman_Sprite.webp"
                        alt="gunman"
                        className="max-w-25"
                    />
                </button>
                <button
                    onClick={() =>
                        addAsset(
                            "/stickers/Gunman_Sprite.webp",
                            "Gunman Sprite"
                        )
                    }
                    className="cursor-pointer hover:bg-irys-main transition-all bg-white p-3 rounded-2xl aspect-square flex flex-col justify-around"
                >
                    <img
                        src="/stickers/Gunman_Sprite.webp"
                        alt="gunman"
                        className="max-w-25"
                    />
                </button>
            </div>
        </div>
    );
};

export default Assets;
