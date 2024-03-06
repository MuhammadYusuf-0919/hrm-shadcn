export const statusColors = (status: string) => {
    const lowerStatuse = status?.toLowerCase()
    // Success statuslar
    const successStatus = [
        "paid",
        "active",
        // "meeting",
        "completed",
        "employee",
        'done'
    ];

    // Warning statuslar
    const warningStatus = ["pending", 'in progress'];

    // Error statuslar
    const errorStatus = ["banned", "overdue", "cancelled", "not-connect", "failed"];

    // Info statuslar
    const infoStatus = ["published", "sent", "meeting", "downloaded", 'processing'];

    // Secondary statuslar
    const secondaryStatus = ["sent", "inactive", "rejected", 'manager', 'not-started'];

    // Default status
    const defaultStatus = ["all", "draft", "no status yet", "refund"];

    // Statuslarni tekshirib va ulang
    if (successStatus.includes(lowerStatuse)) return "success";
    if (warningStatus.includes(lowerStatuse)) return "warning";
    if (errorStatus.includes(lowerStatuse)) return "error";
    if (infoStatus.includes(lowerStatuse)) return "info";
    if (secondaryStatus.includes(lowerStatuse)) return "default";
    if (defaultStatus.includes(lowerStatuse)) return "default";

    // Hali aniqlanmagan status uchun default
    return "default";
};
