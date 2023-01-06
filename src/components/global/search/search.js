import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

export default function SearchBox() {
    const [loadingBoolean, setLoadingBoolean] = useState(0);
    const onSearch = (value) => {
        console.log(value);
        setLoadingBoolean(1);
    };

    return (
        <div>
            {/* <Search
                placeholder="Search..."
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
                loading={loadingBoolean}
            /> */}
        </div>
    );
}
