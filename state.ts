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

namespace StatePattern {

    interface IState {
        order: Order;

        cancelOrder(): void;
        verifyPayment(): void;
        shipOrder(): void;
    }

    class Order {
        public cancelledOrderState: IState;
        public paymentPendingState: IState;
        public orderShipedState: IState;
        public orderBeingPrepared: IState;

        private currentState: IState;

        constructor() {
            this.cancelledOrderState = new CancelledOrderState(this);
            this.paymentPendingState = new PaymentPendingState(this);
            this.orderShipedState = new OrderShippedState(this);
            this.orderBeingPrepared = new OrderBeingPrepared(this);

            this.setState(this.paymentPendingState);
        }

        public setState(state: IState): void {
            this.currentState = state;
        }

        public getCurrentState(): IState {
            return this.currentState;
        }
    }

    class CancelledOrderState implements IState {
        order: Order;

        constructor(order: Order) {
            this.order = order;
        }

        public cancelOrder(): void {
            console.log("This order is already cancelled");
            this.order.setState(this.order.cancelledOrderState);
        }
        public verifyPayment(): void {
            console.log("The order is cancelled, you cannot pay anymore.");
        }
        public shipOrder(): void {
            console.log("The order is cancelled, you cannot ship it anymore.");
        }
    }

    class PaymentPendingState implements IState {
        order: Order;

        constructor(order: Order) {
            this.order = order;
        }

        public cancelOrder(): void {
            console.log("Cancelling your unpaid order...");
            this.order.setState(this.order.cancelledOrderState);
        }
        public verifyPayment(): void {
            console.log("Payment verified! Shipping soon.");
            this.order.setState(this.order.orderBeingPrepared);
        }
        public shipOrder(): void {
            console.log("Cannot ship order when payment is pending!");
        }
    }

    class OrderBeingPrepared implements IState {
        order: Order;

        constructor(order: Order) {
            this.order = order;
        }

        public cancelOrder(): void {
            console.log("Cancelling your order.. You will be refunded.");
            this.order.setState(this.order.cancelledOrderState);
        }
        public verifyPayment(): void {
            console.log("Payment is already verified.");
        }
        public shipOrder(): void {
            console.log("Shipping your order now..");
            this.order.setState(this.order.orderShipedState);
        }
    }

    class OrderShippedState implements IState {
        order: Order;

        constructor(order: Order) {
            this.order = order;
        }

        public cancelOrder(): void {
            console.log("You cannot cancel an order that has been shipped.");
        }
        public verifyPayment(): void {
            console.log("Payment is already verified");
        }
        public shipOrder(): void {
            console.log("Order is already shipped");
        }
    }

    let order: Order = new Order();

    order.getCurrentState().verifyPayment();
    order.getCurrentState().shipOrder();
    order.getCurrentState().cancelOrder();

    console.log("Order state: " + (<any> order.getCurrentState()).constructor.name);
}