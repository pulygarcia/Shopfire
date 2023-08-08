import { generateClasses } from "@formkit/themes"

const config = {
    config:{
        classes: generateClasses({
            global:{
                label: 'block font-bold text-lg',
                message: 'text-red-500 mb-5',
                wrapper: 'space-y-2 mb-3',
                input: 'w-full p-3 border border-gray-300 text-gray-700 placeholder-gray-400'
            },
            text:{
                
            },
            number:{
                
            },
            file:{
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            submit:{
                input: '$reset bg-blue-700 py-2 w-full mt-5 font-bold text-white hover:bg-blue-800 transition disabled:opacity-50'
            }
        })
    }
}

export default config