import { PencilIcon, XIcon } from "@heroicons/react/outline";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";


const handleRemoveItem = (item) => {
  const newOrder = data.order;
  const newItem = data.lessons;
  const delOrderIdx = newOrder.findIndex((indexItem) => indexItem.name === item.name);
  const deleted = newOrder.splice(delOrderIdx, 1);
  const delItemIdx = newItem.findIndex((indexItem) => indexItem === deleted[0].lesson_id);
  newItem.splice(delItemIdx, 1);
  newOrder.sort(sortOrder);
  setData('order', newOrder);
  setData('lessons', newItem);
};

const DragHandle = SortableHandle(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
  </svg>
));
const SortableItem = SortableElement(
  ({ value, sortListRoute, hanldeRemoveItem }) => {
    return (
      <li className="rounded-md w-4/5 relative -mb-px block border p-4 border-grey flex justify-between">
        <DragHandle />
        <span>{value.name}</span>
        <span className="flex justify-between">
          <span>
            <PencilIcon
              className="w-5 h-5 mx-1 text-blue-600 hover:text-red-900 cursor-pointer"
              onClick={() => {
                Inertia.get(route(`${sortListRoute}`, {lid:value.lesson_id, qid: value.id }));
              }}
            />
          </span>
          <span>
            <XIcon
              className="w-5 h-5 mx-1 text-red-600 hover:text-red-900 cursor-pointer"
              onClick={() => hanldeRemoveItem(value)}
            />
          </span>
        </span>
      </li>
    );
  }
);

const SortableList = SortableContainer(
  ({ items, sortListRoute, hanldeRemoveItem }) => {
    return (
      <ul className="list-reset flex flex-col sm:col-span-2 w-full ">
        {items?.map((value, index) => (
          <SortableItem
            key={`item-${value.id}`}
            index={value.order}
            value={value}
            sortListRoute={sortListRoute}
            hanldeRemoveItem={hanldeRemoveItem}
          />
        ))}
      </ul>
    );
  }
);

export default SortableList;
