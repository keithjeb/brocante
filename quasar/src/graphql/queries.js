// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSeller = `query GetSeller($id: ID!) {
  getSeller(id: $id) {
    id
    name
    allocator {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const listSellers = `query ListSellers(
  $filter: ModelSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSellers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAllocator = `query GetAllocator($id: ID!) {
  getAllocator(id: $id) {
    id
    name
    sellers {
      items {
        id
        name
      }
      nextToken
    }
    location
    address
  }
}
`;
export const listAllocators = `query ListAllocators(
  $filter: ModelAllocatorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAllocators(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sellers {
        nextToken
      }
      location
      address
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    itemType {
      id
      desc
      items {
        nextToken
      }
    }
    sex
    description
    price
    cart {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    seller {
      id
      name
      allocator {
        id
        name
        location
        address
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemType {
        id
        desc
      }
      sex
      description
      price
      cart {
        id
        friendlyName
        completed
        scanner
      }
      seller {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getItemType = `query GetItemType($id: ID!) {
  getItemType(id: $id) {
    id
    desc
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
  }
}
`;
export const listItemTypes = `query ListItemTypes(
  $filter: ModelItemTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      desc
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCart = `query GetCart($id: ID!) {
  getCart(id: $id) {
    id
    items {
      items {
        id
        sex
        description
        price
      }
      nextToken
    }
    friendlyName
    completed
    scanner
  }
}
`;
export const listCarts = `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      items {
        nextToken
      }
      friendlyName
      completed
      scanner
    }
    nextToken
  }
}
`;
export const getContent = `query GetContent($id: ID!) {
  getContent(id: $id) {
    id
    placement
    content
    createdAt
    updatedAt
    author
  }
}
`;
export const listContents = `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      placement
      content
      createdAt
      updatedAt
      author
    }
    nextToken
  }
}
`;
