import { computed, ref } from 'vue';

import { useFirebaseStorage, useStorageFile } from 'vuefire'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { uid } from 'uid';


export default function useImage(){
    const storage = useFirebaseStorage();

    const url = ref(null);
    
    const onFileChange = (e) => {
        const file = e.target.files[0];
        
        const refStorage = storageRef(storage, `/products/${uid()}.jpg`);

        //Subir imagen
        const upLoadTask = uploadBytesResumable(refStorage, file);

        upLoadTask.on('state_changed', 
            () => {},

            (error) => {console.log(error)},

            () => {
                //Subida correctamente
                getDownloadURL(upLoadTask.snapshot.ref)
                    .then((downloadUrl) => {
                        url.value = downloadUrl;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        )
    }

    const imageUploaded = computed(() => {
        return url.value ? url.value : null
    })

    return{
        url,
        onFileChange,
        imageUploaded
    }
}