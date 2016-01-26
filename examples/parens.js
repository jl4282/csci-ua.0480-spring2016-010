var isBalanced = function(s) {
    var parentheses = s.split(''),
        stack = [],
        OPEN_PARENS = '(',
        CLOSE_PARENS = ')',
        balanced = true;

    parentheses.every(function(ele, i) {
        if (ele === OPEN_PARENS) {
            stack.push(ele);
        } else if (ele === CLOSE_PARENS) {
            if (stack.length === 0) {
                balanced = false;
                return false;
            } // oops!
        }
        return true;
    });

    if (stack.length !== 0) {
        balanced = false;
    }

    return balanced;
};

// should be true, then false
["()", "(()))("].forEach(function(parens, i) {
	var result = isBalanced(parens);
	console.log(result);
});
