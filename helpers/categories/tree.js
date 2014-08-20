var menuTree = [
    {
        display: 'All Sources',
        value: ''
    },
    {
        display: 'Vålerenga',
        value: 'vålerenga',
        children: [
            {
                display: 'fotball',
                value: 'fotball'
            },
            {
                display: 'hockey',
                value: 'hockey'
            }
        ]
    }
];

function createIndents (inputArray, outputArray, level) {
    inputArray.forEach(function (item) {
        var children = item.children ? item.children.slice(0) : null;

        // reformat the item
        delete item.children;
        for (var i = 0; i < level; i++) {
            item.display = '- ' + item.display;
        }
        outputArray.push(item);

        // enter children in tree if they exist
        if (children) createIndents(children, outputArray, level + 1);
    });
}

var resultingArray = [];

// create flat structure with indents
createIndents(menuTree, resultingArray, 0);

module.exports = resultingArray;
