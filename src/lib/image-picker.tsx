'use client'
import {useRef, Ref, useState, ChangeEvent} from 'react'

import classes from './image-picker.module.css'
import Image from 'next/image'

type ImagePickerType = {
    label: string;
    name: string;
}
const ImagePicker = ({label, name}: ImagePickerType) => {

    // Manage the Picked Image
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();

    const imageInput: Ref<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const handlePickClick = () => {
        if (imageInput.current instanceof HTMLElement) { // Otherwise the Click is not part of null
            imageInput.current.click();
        }
    }

    const handleImageChange = (event: ChangeEvent<HTMLInputElement >) => {
        if (event.target.files) {
            const file = event.target.files[0]
            if (!file) {
                setPickedImage(null)
                return
            }

            // Convert to Data-URL
            const fileReader = new FileReader()
            fileReader.onload = () => {
                setPickedImage(fileReader.result)
            }
            fileReader.readAsDataURL(file)
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No images picked yet.</p>}
                    {pickedImage && typeof pickedImage === "string" && <Image src={pickedImage} alt="The image selected by the user" fill /> }
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >Pick an Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker