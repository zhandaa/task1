function isHappyTicket(ticket) {
    let nums = ticket.split('').map(Number);
    let sum = (arr) => arr.reduce((a, b) => a + b, 0);
    return sum(nums.slice(0, ticket.length/2)) === sum(nums.slice(ticket.length/2));
}