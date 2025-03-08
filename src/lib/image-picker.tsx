import classes from './image-picker.module.css'
type ImagePickerType = {
    label: string;
    name: string;
}
const ImagePicker = ({label, name}: ImagePickerType) => {
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input type="file" id={name} accept="image/png, image/jpeg" name={name}/>
            </div>
        </div>
    )
}

export default ImagePicker