import DeleteItem from './DeleteItem';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
	const { pizzaId, name, quantity, totalPrice } = item;

	return (
		// <li className="flex gap-4 border-b border-stone-200 py-2">
		<li className="py-3 sm:flex sm:items-center sm:justify-between">
			<p className="mb-1 sm:mb-0">
				{quantity}&times; {name}
			</p>
			<div className="flex items-center justify-between sm:gap-6">
				<p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
				<DeleteItem pizzaId={pizzaId} />
			</div>
		</li>
	);
}

export default CartItem;
