import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import InfiniteScroll from "react-infinite-scroll-component";

const Store = () => {
  const [items, setItems] = useState<Array<{ id: number; name: string; price: number; imgUrl: string }>>(storeItems.slice(0, 8));
  const [hasMore, sethasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= storeItems.length) {
      sethasMore(false);
      return;
    }
    setTimeout(() => {
      const nextItems = storeItems.slice(items.length, items.length + 3);
      setItems(prevItems => [...prevItems, ...nextItems]);
    }, 1000);
  };

  return (
    <div>
      <h1>Store</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Working on bringing more items into our store</b>
          </p>
        }
      >
            <Row md={2} xs={1} lg={3} className="g-3">
          {items.map(item =>
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )}
        </Row>
      </InfiniteScroll>
    </div>
  );
};

export default Store;
