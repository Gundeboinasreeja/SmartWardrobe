function getOutfitSuggestion(message, items) {
    const keywords = message.toLowerCase().split(' ');

    let suggestions = [];

    // Match user keywords with items based on categories
    Object.keys(items).forEach(category => {
        items[category].forEach(item => {
            if (keywords.some(keyword => item.name.toLowerCase().includes(keyword))) {
                suggestions.push({
                    name: item.name,
                    filename: item.filename,
                    category: category
                });
            }
        });
    });

    if (suggestions.length === 0) {
        return { response: 'No matching outfits found based on your description.', suggestions: [] };
    }

    return {
        response: `Found ${suggestions.length} item(s) that match your description:`,
        suggestions
    };
}

module.exports = { getOutfitSuggestion };
