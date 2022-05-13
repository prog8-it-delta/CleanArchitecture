import React, { useState, useEffect, useContext, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Table from "../../Components/Table.jsx";
import OneLineCell from "../../Components/OneLineCell.jsx";
import ActionsCell from "../../Components/ActionsCell.jsx";
import StatusCell from "../../Components/StatusCell.jsx";
import { AdminContext } from "../reducer.jsx";
import axios from "axios";
import Select from "react-select";
import Header from "../../Components/Header.jsx";

export default function Lessons({ paginatedLessons }) {
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [controlledPageCount, setControlledPageCount] = useState(
    paginatedLessons.last_page
  );
  const lessons = paginatedLessons.data;
  const {
    state: { navigation: nav },
    dispatch,
  } = useContext(AdminContext);

  // useEffect(() => {
  //   dispatch({
  //     type: "CHANGE_HEADER",
  //     payload: "Уроки",
  //   });
  // }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Filter: "",
      width: 250,
      Cell: OneLineCell,
    },
    {
      Header: "active",
      accessor: "active",
      Filter: "",
      width: 70,
      Cell: StatusCell,
    },
    {
      Header: "Courses",
      accessor: (row) => row.courses.map((item) => item.name).join(", "),
      Filter: "",
      width: 250,
      Cell: OneLineCell,
    },
    {
      Header: "ACTIONS",
      accessor: "rowActions",
      disableFilters: true,
      Filter: "",
      width: 100,
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
            action: () => {
              Inertia.get(route("admin.lesson.edit", item.id));
            },
            disabled: false,
          },
          {
            name: "delete",
            type: "delete",
            action: () => {
              Inertia.post(
                route("admin.lesson.delete", [item.id]),
                {},
                {
                  onSuccess: () => {
                    dispatch({
                      type: "SHOW_NOTIFICATION",
                      payload: {
                        position: "bottom",
                        type: "success",
                        header: "Success!",
                        message: "Lesson deleted!",
                      },
                    });
                    setTimeout(
                      () => dispatch({ type: "HIDE_NOTIFICATION" }),
                      3000
                    );
                    Inertia.get(route("admin.lessons"));
                  },
                }
              );
            },
            disabled: false,
          },
        ],
      };
    });
  };

  const [data, setData] = useState(addActions(lessons));
  const [searchCourseId, setSearchCourseId] = useState(null);

  const fetchData = useCallback(({ pageIndex, pageSize }) => {
    setLoading(true);

    axios
      .get(`${route(route().current())}?page=${pageIndex}&perpage=${pageSize}`)
      .then((resp) => {
        setCurPage(Number(resp.data.current_page - 1));
        setControlledPageCount(resp.data.last_page);
        setData(addActions(resp.data.data));
      })
      .then(() => setLoading(false));
  }, []);

  const handleCourseSearch = (inputValue) => {
    setSearchCourseId(inputValue === null ? null : inputValue.value);
  };

  const allCourses = lessons.map((item) => {
    return {
      value: item.courses[0]?.id,
      label: item.courses[0]?.name,
    };
  });

  const applyFilters = (courseItem) => {
    // debugger;
    const course =
      searchCourseId !== null
        ? courseItem.courses[0].id === searchCourseId
        : true;
    return course;
  };

  useEffect(() => {
    setData(addActions(lessons));
  }, [nav]);

  return (
    <main className="w-full h-fit">
        <div className="shadow bg-white px-4 pt-1 pb-4 rounded-xl border-b border-gray-200 sm:px-6">        
      <Header title={'Уроки'}/>
      <div className="w-full pb-4 flex gap-10">
        <div className="w-80">
          Курс:
          <Select
            placeholder={"Select Course"}
            options={[
              ...new Map(
                allCourses.map((item) => [item["value"], item])
              ).values(),
            ]}
            isClearable
            onChange={handleCourseSearch}
          />
        </div>
      </div>
      <Table
        dataValue={data.filter(applyFilters)}
        columnsValue={columns}
        controlledPageCount={controlledPageCount}
        total={paginatedLessons.total}
        fetchData={fetchData}
        loading={loading}
        curPage={curPage}
        pageSizes={[3, 6, 9, 12]}
      />
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 mt-4 text-base font-medium text-white
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm
            bg-indigo-500 hover:bg-indigo-700"
        onClick={() => {
          Inertia.get(route("admin.lesson.create"));
        }}
      >
        Add Lesson
      </button>
      </div>
    </main>
  );
}
