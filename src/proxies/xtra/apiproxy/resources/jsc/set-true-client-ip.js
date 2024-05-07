var xffArray = context.getVariable("request.header.x-forwarded-for.values");
var xffArrayLength = context.getVariable("request.header.X-Forwarded-For.values.count");
var clientIp = context.getVariable("request.header.x-forwarded-for." + (xffArrayLength - 2));
context.setVariable("request.header.true-client-ip", clientIp);
