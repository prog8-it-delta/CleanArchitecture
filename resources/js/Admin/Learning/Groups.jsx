import React, {useState, useEffect, useContext, useCallback} from "react";
import { Inertia } from "@inertiajs/inertia";
import Table from "../../Components/Table/Table.jsx";
import ActionsCell from "../../Components/Table/Cell/ActionsCell.jsx";
import NameCell from "../../Components/Table/Cell/NameCell.jsx";
import OneLineCell from "../../Components/Table/Cell/OneLineCell";
import Header from "../../Components/AdminPages/Header.jsx";
import axios from "axios";
import BooleanCell from "../../Components/Table/Cell/BooleanCell";
import TwoLineCell from "../../Components/Table/Cell/TwoLineCell";
import StatusCell from "../../Components/Table/Cell/StatusCell";
import {useTranslation} from "react-i18next";

export default function Users({ paginatedList }) {
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [controlledPageCount, setControlledPageCount] = useState(paginatedList.last_page);
  const { t } = useTranslation(['table', 'groups']);
  const loc = window.location.pathname;
  const checkStorage = JSON.parse(localStorage.getItem(loc));
  const users = checkStorage? []:paginatedList.data;
  const columns = [
    {
      Header: "#",
      accessor: "id",
      Filter: "",
      width: 50,
    },
    {
      Header: t('table:name'),
      accessor: (row) => {
        return {
          name: row.name,
          actionName: 'edit'
        };
      },

      width: 200,
      Filter: "",
      Cell: NameCell,
    },
    {
      Header: t('status'),
      accessor: "active",
      Filter: "",
      width: 70,
      Cell: StatusCell,
    },
    {
      Header: t('description'),
      accessor: "description",
      disableFilters: true,
      Filter: "",
      width: 250,
      Cell: TwoLineCell,
    },
    {
      Header: "",
      accessor: "rowActions",
      disableFilters: true,
      Filter: "",
      width: 200,
      Cell: ActionsCell,
    },
  ];
  const addActions = (items) => {
    return items.map((item, i) => {
      return {
        ...item,
        rowActions: [
          {
            name: "edit",
            type: "edit",
            action: () => { Inertia.get(route("admin.groups.edit", item.id)) },
            disabled: false,
          },
          {
            name: "delete",
            type: "delete",
            action: () => {
              Inertia.post( route("admin.groups.delete", item.id)) },
            disabled: false,
          },
        ],
      };
    });
  };

  const [data, setData] = useState(addActions(users));

  useEffect(() => {
    setData(addActions(users));
  }, [paginatedList]);

  const fetchData = useCallback(({ pageIndex, pageSize, sort, sortBy }) => {
    setLoading(true);

    axios
      .get(`${route(route().current())}?page=${pageIndex}&perpage=${pageSize}&sort=${sort??''}&sortBy=${sortBy??''}`)
      .then((resp) => {
        setCurPage(Number(resp.data.current_page - 1));
        setControlledPageCount(resp.data.last_page);
        setData(addActions(resp.data.data));
      })
      .then(() => setLoading(false));
  }, []);

  return (
    <main>
      <div className="shadow bg-white px-4 pt-1 pb-4 rounded-xl border-b border-gray-200 sm:px-6">
      <Header title={t('groups:title')}/>
      <Table
        dataValue={data}
        columnsValue={columns}
        controlledPageCount={controlledPageCount}
        total={paginatedList.total}
        fetchData={fetchData}
        loading={loading}
          curPage={curPage}
          loc={loc}
        perPage={paginatedList.per_page}
      />
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 mt-4 text-base font-medium text-white
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm
              bg-indigo-500 hover:bg-indigo-700"
        onClick={() => {
          Inertia.get(route("admin.groups.create"));
        }}
      >
        { t('groups:add') }
      </button>
      </div>
    </main>
  );
}
