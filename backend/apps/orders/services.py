from .models import Order


def get_orders_by_session_id(session_id):
    return Order.objects.filter(session_id=session_id)
