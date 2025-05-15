import "./index.css";
import { useRef, useState, useEffect } from "react";
import * as fabric from "fabric";
import toast, { Toaster } from "react-hot-toast";
import { Download, Eraser, TwitterIcon } from "lucide-react";
import Assets from "./components/Assets";

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const [isImageAdded, setIsImageAdded] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        if (canvasRef.current && isImageAdded) {
            const initCanvas = new fabric.Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            });

            initCanvas.renderAll();
            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            };
        }
    }, [isImageAdded]);

    useEffect(() => {
        if (canvas && imageFile) {
            const img = new Image();
            img.src = URL.createObjectURL(imageFile);

            img.onload = () => {
                const fabricImage = new fabric.Image(img);

                canvas.add();
                canvas.add(fabricImage);
                canvas.centerObject(fabricImage);
                canvas.setActiveObject(fabricImage);
                canvas.renderAll();
            };
        }
    }, [canvas, imageFile]);

    const handleAddImage = (e: any) => {
        const file = e.target.files[0];

        if (!file) {
            console.error("No file selected.");
            return;
        }

        setImageFile(file);
        setIsImageAdded(true);
    };

    const addAsset = (imageUrl: string, assetName: string) => {
        const imageElement = new Image();
        imageElement.src = imageUrl;

        imageElement.onload = () => {
            const fabricImage = new fabric.Image(imageElement);

            if (canvas) {
                toast.success(`${assetName} added`);
                canvas.add(fabricImage);
                canvas.bringObjectToFront(fabricImage);
                canvas.centerObject(fabricImage);
                canvas.setActiveObject(fabricImage);
                canvas.renderAll();
            }
        };
    };

    const saveCanvasAsImage = (
        canvas: fabric.Canvas,
        fileName: string = "canvas_image.png"
    ) => {
        if (!canvas) {
            console.error("Canvas not initialized.");
            toast.error("Something went wrong");
            return;
        }

        const dataUrl = canvas.toDataURL({
            format: "png",
            quality: 1,
            multiplier: 1,
        });

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Image downloaded successfully");
    };

    const handleClearCanvas = () => {
        if (canvas) {
            canvas.clear();
            setImageFile(null);
        }
    };

    return (
        <main className="relative min-h-screen">
            <Toaster position="top-right" />
            <div className="absolute inset-0 bg-[url('/env.webp')] bg-cover bg-center z-0" />

            <div
                className={`relative z-10 ${
                    isImageAdded ? "backdrop-blur-sm" : ""
                } min-h-screen`}
            >
                <div className="max-w-2xl mx-auto pt-10">
                    <header className="flex justify-center py-4 rounded-2xl bg-irys-black backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="/logo_white.webp"
                                alt="logo"
                                className="max-w-80"
                            />
                            <h1 className="font-bold text-4xl text-irys-main pt-4">
                                AVATAR BUILDER
                            </h1>
                            <p className="text-sm text-white/80">
                                by{" "}
                                <a
                                    href="https://x.com/prmakk"
                                    className="underline"
                                >
                                    prmakk
                                </a>
                            </p>
                        </div>
                    </header>

                    <div className="max-w-full flex justify-center items-center mt-10">
                        <div>
                            <input
                                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100"
                                aria-describedby="file_input_help"
                                id="file_input"
                                type="file"
                                accept="image/*"
                                onChange={handleAddImage}
                            />
                        </div>
                    </div>

                    {isImageAdded && (
                        <div className="lg:flex-row lg:items-start p-10 flex flex-col justify-between gap-6 items-center">
                            <div className="flex flex-col flex-1/2 gap-4 justify-center items-center">
                                <canvas
                                    ref={canvasRef}
                                    className="border-dashed border-1 border-amber-50 rounded-2xl"
                                />

                                <div className="flex justify-around w-full">
                                    <button
                                        onClick={() =>
                                            saveCanvasAsImage(
                                                canvas!,
                                                "irys_avatar_by_prmak.png"
                                            )
                                        }
                                        className="flex gap-1 items-center bg-irys-main px-6 py-2 rounded-lg border-3 border-irys-main hover:border-3 hover:border-irys-black cursor-pointer transition-all"
                                    >
                                        Download
                                        <Download size={20} />
                                    </button>
                                    <button
                                        onClick={handleClearCanvas}
                                        className="flex gap-1 items-center bg-irys-main px-6 py-2 rounded-lg border-3 border-irys-main hover:border-3 hover:border-irys-black cursor-pointer transition-all"
                                    >
                                        Clear
                                        <Eraser size={20} />
                                    </button>
                                </div>
                            </div>

                            <Assets addAsset={addAsset} />
                        </div>
                    )}
                </div>

                <div className="absolute bottom-5 right-5">
                    <a href="https://x.com/prmakk" target="_blank">
                        <TwitterIcon
                            className="text-slate-700 hover:text-purple transition-all hover:scale-110"
                            size={35}
                        />
                    </a>
                </div>
            </div>
        </main>
    );
}

export default App;
