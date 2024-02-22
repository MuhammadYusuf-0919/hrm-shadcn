export const statusColors = (status: string) => {
    const lowerStatuse = status?.toLowerCase()
    // Success statuslar
    const successStatus = [
        "paid",
        "active",
        // "meeting",
        "completed",
        "employee"
    ];

    // Warning statuslar
    const warningStatus = ["pending"];

    // Error statuslar
    const errorStatus = ["banned", "overdue", "cancelled", "not-connect"];

    // Info statuslar
    const infoStatus = ["published", "sent", "meeting", "Downloaded"];

    // Secondary statuslar
    const secondaryStatus = ["sent", "inactive", "rejected", 'manager'];

    // Default status
    const defaultStatus = ["all", "draft", "no status yet", "refund"];

    // Statuslarni tekshirib va ulang
    if (successStatus.includes(lowerStatuse)) return "green";
    if (warningStatus.includes(lowerStatuse)) return "amber";
    if (errorStatus.includes(lowerStatuse)) return "red";
    if (infoStatus.includes(lowerStatuse)) return "cyan";
    if (secondaryStatus.includes(lowerStatuse)) return "gray";
    if (defaultStatus.includes(lowerStatuse)) return "default";

    // Hali aniqlanmagan status uchun default
    return "default";
};
