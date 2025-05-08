type PageTitle = {
    title: string;
}

export const PageTitle = ({title}: PageTitle) => {
    return (
        <h1>{title}</h1>
    )
}
