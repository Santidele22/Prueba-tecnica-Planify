import toast from 'react-hot-toast';

export function handleSelection<T>(
    selectedItem: T,
    selectedList: T[],
    setSelectedList: React.Dispatch<React.SetStateAction<T[]>>,
    errorMessage: string,
    compareFn: (a: T, b: T) => boolean
) {
    const index = selectedList.findIndex(item => compareFn(item, selectedItem));
    if (index === -1) {
        // Si el elemento no está seleccionado, agregarlo
        if (selectedList.length >= 1) {
            toast.error(errorMessage, {
                duration: 2000 // Duración en milisegundos (en este caso, 3 segundos)
            });
        } else {
            setSelectedList(prevSelectedList => [...prevSelectedList, selectedItem]);
        }
    } else {
        // Si el elemento está seleccionado, eliminarlo
        setSelectedList(prevSelectedList => {
            const updatedList = [...prevSelectedList];
            updatedList.splice(index, 1);
            return updatedList;
        });
    }
}
   
 