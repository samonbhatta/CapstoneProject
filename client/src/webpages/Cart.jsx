import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
 import { useEffect, useState } from "react";
import { userRequest } from "../webpages/requestMethod"
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
const KEY = process.env.REACT_APP_STORE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total*100,
        });
        console.log(res.data);
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img}/>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))};
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
            <StripeCheckout
              name="SHOPCHOP LLC"
              image="data:image/jpeg;base64,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"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            
              </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;