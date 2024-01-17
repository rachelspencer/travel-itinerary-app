const ActivityCard = ({activity}) => {
    return (
        <section>
            <h3>{activity.title}</h3>
            <p>{activity.address}</p>
            <p>{activity.info}</p>
            <p>{activity.price}</p>
        </section>
    )
};

export default ActivityCard;