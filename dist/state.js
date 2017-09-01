"use strict";
/*
    The state pattern is a behavioral software design pattern that implements a state machine
    in an object-oriented way. With the state pattern, a state machine is implemented by
    implementing each individual state as a derived class of the state pattern interface,
    and implementing state transitions by invoking methods defined by the pattern's superclass.
    The state pattern can be interpreted as a strategy pattern which is able to switch the current
    strategy through invocations of methods defined in the pattern's interface.
    This pattern is used in computer programming to encapsulate varying behavior for the same
    object based on its internal state. This can be a cleaner way for an object to change its
    behavior at runtime without resorting to large monolithic conditional statements and
    thus improve maintainability.
*/
var StatePattern;
(function (StatePattern) {
    var Order = (function () {
        function Order() {
            this.cancelledOrderState = new CancelledOrderState(this);
            this.paymentPendingState = new PaymentPendingState(this);
            this.orderShipedState = new OrderShippedState(this);
            this.orderBeingPrepared = new OrderBeingPrepared(this);
            this.setState(this.paymentPendingState);
        }
        Order.prototype.setState = function (state) {
            this.currentState = state;
        };
        Order.prototype.getCurrentState = function () {
            return this.currentState;
        };
        return Order;
    }());
    var CancelledOrderState = (function () {
        function CancelledOrderState(order) {
            this.order = order;
        }
        CancelledOrderState.prototype.cancelOrder = function () {
            console.log("This order is already cancelled");
            this.order.setState(this.order.cancelledOrderState);
        };
        CancelledOrderState.prototype.verifyPayment = function () {
            console.log("The order is cancelled, you cannot pay anymore.");
        };
        CancelledOrderState.prototype.shipOrder = function () {
            console.log("The order is cancelled, you cannot ship it anymore.");
        };
        return CancelledOrderState;
    }());
    var PaymentPendingState = (function () {
        function PaymentPendingState(order) {
            this.order = order;
        }
        PaymentPendingState.prototype.cancelOrder = function () {
            console.log("Cancelling your unpaid order...");
            this.order.setState(this.order.cancelledOrderState);
        };
        PaymentPendingState.prototype.verifyPayment = function () {
            console.log("Payment verified! Shipping soon.");
            this.order.setState(this.order.orderBeingPrepared);
        };
        PaymentPendingState.prototype.shipOrder = function () {
            console.log("Cannot ship order when payment is pending!");
        };
        return PaymentPendingState;
    }());
    var OrderBeingPrepared = (function () {
        function OrderBeingPrepared(order) {
            this.order = order;
        }
        OrderBeingPrepared.prototype.cancelOrder = function () {
            console.log("Cancelling your order.. You will be refunded.");
            this.order.setState(this.order.cancelledOrderState);
        };
        OrderBeingPrepared.prototype.verifyPayment = function () {
            console.log("Payment is already verified.");
        };
        OrderBeingPrepared.prototype.shipOrder = function () {
            console.log("Shipping your order now..");
            this.order.setState(this.order.orderShipedState);
        };
        return OrderBeingPrepared;
    }());
    var OrderShippedState = (function () {
        function OrderShippedState(order) {
            this.order = order;
        }
        OrderShippedState.prototype.cancelOrder = function () {
            console.log("You cannot cancel an order that has been shipped.");
        };
        OrderShippedState.prototype.verifyPayment = function () {
            console.log("Payment is already verified");
        };
        OrderShippedState.prototype.shipOrder = function () {
            console.log("Order is already shipped");
        };
        return OrderShippedState;
    }());
    var order = new Order();
    order.getCurrentState().verifyPayment();
    order.getCurrentState().shipOrder();
    order.getCurrentState().cancelOrder();
    console.log("Order state: " + order.getCurrentState().constructor.name);
})(StatePattern || (StatePattern = {}));
