import React, { useEffect, useState } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { CustomerService } from '../service/CustomerService';
import { Ripple } from '../../components/ripple/Ripple';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { InputText } from '../../components/inputtext/InputText';
import { classNames } from '../../components/utils/ClassNames';

export const DataTablePaginatorDemo = () => {
    const [customers2, setCustomers2] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState(
      "Press 'Enter' key to go to this page."
    );

    const customerService = new CustomerService();

    const onCustomPage1 = (event) => {
      console.log("onCustomPage1");
      setFirst1(event.first);
      setRows1(event.rows);
      setCurrentPage(event.page + 1);
    };


    const onPageInputKeyDown = (event, options) => {
      if (event.key === "Enter") {
        const page = parseInt(currentPage, 10);
        if (page < 0 || page > options.totalPages) {
          setPageInputTooltip(
            `Value must be between 1 and ${options.totalPages}.`
          );
        } else {
          const first = currentPage ? options.rows * (page - 1) : 0;

          setFirst1(first);
          setPageInputTooltip("Press 'Enter' key to go to this page.");
        }
      }
    };

    const onPageInputChange = (event) => {
      setCurrentPage(event.target.value);
    };

    useEffect(() => {
      customerService.getCustomersLarge().then((data) => setCustomers2(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const template1 = {
      layout:
        "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
      PrevPageLink: (options) => {
        return (
          <button
            type="button"
            className={options.className}
            onClick={options.onClick}
            disabled={options.disabled}
          >
            <span className="p-p-3">Previous</span>
            <Ripple />
          </button>
        );
      },
      NextPageLink: (options) => {
        return (
          <button
            type="button"
            className={options.className}
            onClick={options.onClick}
            disabled={options.disabled}
          >
            <span className="p-p-3">Next</span>
            <Ripple />
          </button>
        );
      },
      PageLinks: (options) => {
        if (
          (options.view.startPage === options.page &&
            options.view.startPage !== 0) ||
          (options.view.endPage === options.page &&
            options.page + 1 !== options.totalPages)
        ) {
          const className = classNames(options.className, { "p-disabled": true });

          return (
            <span className={className} style={{ userSelect: "none" }}>
              ...
            </span>
          );
        }

        return (
          <button
            type="button"
            className={options.className}
            onClick={options.onClick}
          >
            {options.page + 1}
            <Ripple />
          </button>
        );
      },
      RowsPerPageDropdown: (options) => {
        const dropdownOptions = [
          { label: 10, value: 10 },
          { label: 20, value: 20 },
          { label: 50, value: 50 },
          { label: "All", value: options.totalRecords }
        ];

        return (
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
            appendTo={document.body}
          />
        );
      },
      CurrentPageReport: (options) => {
        return (
          <span
            className="p-mx-3"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Go to{" "}
            <InputText
              size="2"
              className="p-ml-1"
              value={currentPage}
              tooltip={pageInputTooltip}
              onKeyDown={(e) => onPageInputKeyDown(e, options)}
              onChange={onPageInputChange}
            />
          </span>
        );
      }
    };

    return (
      <div>
        <div className="card">
          <h5>Custom Paginator Template</h5>
          <DataTable
            value={customers2}
            paginator
            paginatorTemplate={template1}
            first={first1}
            rows={rows1}
            onPage={onCustomPage1}
          >
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="representative.name" header="Representative"></Column>
          </DataTable>
        </div>
      </div>
    );
  };
