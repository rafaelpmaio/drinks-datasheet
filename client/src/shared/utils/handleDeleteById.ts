export default function handleDeleteById<T extends { _id: string }>(
    id: string,
    list: T[],
    setList: (arr: T[]) => void
) {
    const updatedList = list.filter(item => item._id !== id);
    setList(updatedList);
}